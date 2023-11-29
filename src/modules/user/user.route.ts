import express from 'express'
import { UserController } from './user.controller'
import { studentValidations } from '../student/student.zod.validate'
import validateRequest from '../../app/middleware/validateRequest'

const router = express.Router()

router.post(
  '/create-student',
  validateRequest(studentValidations.studentZodValidatorData),
  UserController.createStudent,
)

//students route
export const UserRoutes = router
