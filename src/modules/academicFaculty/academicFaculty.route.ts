import express from 'express'
import { AcademicFacultyValidation } from './academicFaculty.validation'
import validateRequest from '../../app/middleware/validateRequest'
import { AcademicFacultyControllers } from './academicFaculty.controller'

const router = express.Router()

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
)

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties)
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)
router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updatedAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateSingleAcademicFaculty,
)

//students route
export const AcademicFacultyRoutes = router
