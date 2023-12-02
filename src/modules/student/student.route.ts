import express from 'express'
import { StudentController } from './student.controller'
import validateRequest from '../../app/middleware/validateRequest'
import { studentValidations } from './student.zod.validate'

const router = express.Router()

router.get('/', StudentController.getAllStudent)

router.get('/:studentId', StudentController.getSingleStudent)
router.patch(
  '/:studentId',
  validateRequest(studentValidations.updateStudentZodValidatorData),
  StudentController.updateSingleStudent,
)

router.delete('/:studentId', StudentController.deleteStudent)

//students route
export const StudentRoutes = router
