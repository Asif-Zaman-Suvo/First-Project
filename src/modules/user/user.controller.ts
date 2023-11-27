import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body
    const result = await UserService.createStudentIntoDB(password, studentData)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createStudent,
}
