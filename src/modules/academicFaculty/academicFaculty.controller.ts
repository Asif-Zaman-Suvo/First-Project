/* eslint-disable no-unused-vars */

import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'
import catchAsync from '../../app/utils/catchAsync'
import { AcademicFacultyServices } from './academicFaculty.service'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty created successfully',
    data: result,
  })
})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculties Retrived successfully',
    data: result,
  })
})

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Faculty Retrived successfully',
    data: result,
  })
})

const updateSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params
  const result =
    await AcademicFacultyServices.updateASingleAcademicFacultyFromDB(
      facultyId,
      req.body,
    )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Faculty Updated successfully',
    data: result,
  })
})

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
}
