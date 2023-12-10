/* eslint-disable no-unused-vars */

import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'
import catchAsync from '../../app/utils/catchAsync'

import { CourseServices } from './course.service'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course created successfully',
    data: result,
  })
})

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourseFromDB(req.query)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Course Retrived successfully',
    data: result,
  })
})

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.getSingleCourseFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Course Retrived successfully',
    data: result,
  })
})

const updateSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.updateSingleCourseFromDB(id, req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Course Updated successfully',
    data: result,
  })
})

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CourseServices.deleteCourseFromDB(id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course deleted successfully',
    data: result,
  })
})

const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const { faculty } = req.body
  const result = await CourseServices.assignFacultyWithCourseIntoDB(
    courseId,
    faculty,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Faculty Assign successfully',
    data: result,
  })
})

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deleteCourse,
  updateSingleCourse,
  assignFacultiesWithCourse,
}
