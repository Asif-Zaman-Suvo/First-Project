/* eslint-disable no-unused-vars */

import httpStatus from 'http-status'
import sendResponse from '../../app/utils/sendResponse'
import catchAsync from '../../app/utils/catchAsync'
import { AcademicDepartmentServices } from './academicDepartment.service'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department created successfully',
    data: result,
  })
})

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Departments Retrived successfully',
    data: result,
  })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId,
    )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Department Retrived successfully',
    data: result,
  })
})

const updateSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params
  const result =
    await AcademicDepartmentServices.updateASingleAcademicDepartmentFromDB(
      departmentId,
      req.body,
    )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Academic Department Updated successfully',
    data: result,
  })
})

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
}
