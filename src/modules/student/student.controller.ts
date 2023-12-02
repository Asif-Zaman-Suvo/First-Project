/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { StudentServices } from './student.service'
import sendResponse from '../../app/utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../app/utils/catchAsync'

const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await StudentServices.getSingleStudentFromDB(studentId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  })
})

const updateSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const { student: studentData } = req.body
  const result = await StudentServices.updateSingleStudentFromDB(
    studentId,
    studentData,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student updated successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentFromDB(studentId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student deleted successfully',
    data: result,
  })
})

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateSingleStudent,
}
