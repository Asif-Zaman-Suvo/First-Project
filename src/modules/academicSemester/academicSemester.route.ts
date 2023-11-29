import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'
import validateRequest from '../../app/middleware/validateRequest'
import { academicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.academicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
)

router.get('/', AcademicSemesterControllers.getAllAcademicSemester)
router.get('/:semesterId', AcademicSemesterControllers.getSingleSemester)
router.put(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.updatedAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateSingleSemester,
)

//students route
export const AcademicSemesterRoutes = router
