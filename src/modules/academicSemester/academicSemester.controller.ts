/* eslint-disable no-unused-vars */

import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'
import catchAsync from '../../app/utils/catchAsync'
import { AcademicSemesterServices } from './academicSemester.service'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester created successfully',
    data: result,
  })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester Retrived successfully',
    data: result,
  })
})

const getSingleSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Semester Retrived successfully',
    data: result,
  })
})

const updateSingleSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result =
    await AcademicSemesterServices.updateASingleAcademicSemesterFromDB(
      semesterId,
      req.body,
    )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Semester Retrived successfully',
    data: result,
  })
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleSemester,
  updateSingleSemester,
}
