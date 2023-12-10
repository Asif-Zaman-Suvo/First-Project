import express from 'express'
import validateRequest from '../../app/middleware/validateRequest'
import { CourseValidation } from './course.validation'
import { CourseController } from './course.controller'

const router = express.Router()

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseController.createCourse,
)

router.get('/', CourseController.getAllCourse)
router.patch(
  '/:id',
  validateRequest(CourseValidation.updateCourseValidationSchema),
  CourseController.updateSingleCourse,
)
router.get('/:id', CourseController.getSingleCourse)
router.put(
  '/:courseId/assign-faculties',
  CourseController.assignFacultiesWithCourse,
)

router.delete('/:id', CourseController.deleteCourse)

//students route
export const CourseRoutes = router
