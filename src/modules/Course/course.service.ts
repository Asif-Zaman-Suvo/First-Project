import { CourseSearchableFields } from './course.constant'
import QueryBuilder from '../../app/builder/QueryBuilder'
import { TCourse, TCourseFaculty } from './course.interface'
import { Course, CourseFaculty } from './course.model'
import mongoose from 'mongoose'
import AppError from '../../app/errors/appError'
import httpStatus from 'http-status'

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload)
  return result
}

const getAllCourseFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourse.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .paginate()
    .fields()
    .sort()
  const result = await courseQuery.modelQuery
  return result
}

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate('preRequisiteCourse.course')
  return result
}

const updateSingleCourseFromDB = async (
  id: string,
  payload: Partial<TCourse>,
) => {
  const { preRequisiteCourse, ...courseRemainingData } = payload

  const session = await mongoose.startSession()

  try {
    session.startTransaction()

    const updateBasicUserInfo = await Course.findByIdAndUpdate(
      id,
      courseRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      },
    )

    if (!updateBasicUserInfo) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to update basic user info',
      )
    }

    if (preRequisiteCourse && preRequisiteCourse.length > 0) {
      //filter out the deleted fields
      const deletedPreRequisite = preRequisiteCourse
        .filter((el) => el.course && el.isDeleted === true)
        .map((item) => item.course)

      const deletedPreRequisiteCourse = await Course.findByIdAndUpdate(
        id,
        {
          $pull: {
            preRequisiteCourse: { course: { $in: deletedPreRequisite } },
          },
        },
        { new: true, runValidators: true, session },
      )
      if (!deletedPreRequisiteCourse) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Failed to update basic user info',
        )
      }
      const newPrequisite = preRequisiteCourse?.filter(
        (el) => el.course && !el.isDeleted,
      )

      const newPreRequisiteCourse = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourse: { $each: newPrequisite } },
        },
        { new: true, runValidators: true, session },
      )
      if (!newPreRequisiteCourse) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Failed to update basic user info',
        )
      }
      const result = await Course.findById(id).populate(
        'preRequisiteCourse.course',
      )

      return result
    }
    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Failed to update basic user info',
    )
  }
}

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return result
}

const assignFacultyWithCourseIntoDB = async (
  id: string,
  payload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    { $addToSet: { faculty: { $each: payload } } },
    { upsert: true, new: true },
  )
  return result
}

export const CourseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
  updateSingleCourseFromDB,
  assignFacultyWithCourseIntoDB,
}
