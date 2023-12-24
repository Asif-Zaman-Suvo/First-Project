import express from 'express'
import { UserController } from './user.controller'
import { studentValidations } from '../student/student.zod.validate'
import validateRequest from '../../app/middleware/validateRequest'
import auth from '../../app/middleware/auth'
import { USER_ROLE } from './user.constant'

const router = express.Router()

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(studentValidations.studentZodValidatorData),
  UserController.createStudent,
)

//students route
export const UserRoutes = router
