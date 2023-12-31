import { Router } from 'express'
import { StudentRoutes } from '../../modules/student/student.route'
import { UserRoutes } from '../../modules/user/user.route'
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route'
import { AcademicFacultyRoutes } from '../../modules/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoutes } from '../../modules/academicDepartment/academicDepartment.route'
import { CourseRoutes } from '../../modules/Course/course.route'
import { semesterRegistrationRoutes } from '../../modules/semesterRegistration/semesterRegistration.route'
import { offeredCourseRoutes } from '../../modules/OfferedCourse/OfferedCourse.route'
import { FacultyRoutes } from '../../modules/Faculty/faculty.route'
import { AuthRoutes } from '../../modules/Auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/faculty',
    route: FacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-course',
    route: offeredCourseRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
