import express from 'express'

import { FacultyControllers } from './faculty.controller'
import {
  createFacultyValidationSchema,
  updateFacultyValidationSchema,
} from './faculty.validation'
import validateRequest from '../../app/middleware/validateRequest'

const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  FacultyControllers.createFaculty,
)
router.get('/:id', FacultyControllers.getSingleFaculty)

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
)

// router.delete('/:id', FacultyControllers.deleteFaculty)

router.get('/', FacultyControllers.getAllFaculties)

export const FacultyRoutes = router
