import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

router.get('/', StudentController.getAllStudent)

router.get('/:studentId', StudentController.getSingleStudent)
router.delete('/:studentId', StudentController.deleteStudent)

//students route
export const StudentRoutes = router
