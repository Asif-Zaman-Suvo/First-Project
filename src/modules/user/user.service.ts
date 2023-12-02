import config from '../../app/config'
import { AcademicSemester } from '../academicSemester/academicSemester.model'
import { generateStudentId } from './user.utils'
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'
import mongoose from 'mongoose'
import AppError from '../../app/errors/appError'
import httpStatus from 'http-status'

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {}
  //if not use default password

  if (!password) {
    password = config.default_password as string
  } else {
    userData.password = password
  }
  //set the student role
  userData.role = 'Student'

  // const generateStudentId = (payload: TAcademicSemester) => {}
  //manually set the student id

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  )

  const session = await mongoose.startSession()

  try {
    session.startTransaction()
    userData.id = await generateStudentId(admissionSemester)

    //create a new user
    const newUser = await User.create([userData], { session }) //built in static method

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to create a new user')
    }
    payload.id = newUser[0].id
    payload.user = newUser[0]._id // reference id
    //create a new student
    const newStudent = await Student.create([payload], { session })
    if (!newUser.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'failed to create a new student',
      )
    }
    await session.commitTransaction()
    await session.endSession()
    return newStudent
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
  }
}

export const UserService = {
  createStudentIntoDB,
}
