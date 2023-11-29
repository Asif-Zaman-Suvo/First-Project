/* eslint-disable no-unused-vars */
import { UserService } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'
import catchAsync from '../../app/utils/catchAsync'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body
  const result = await UserService.createStudentIntoDB(password, studentData)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  })
})

export const UserController = {
  createStudent,
}
