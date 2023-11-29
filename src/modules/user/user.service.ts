import config from '../../app/config'
import { AcademicSemester } from '../academicSemester/academicSemester.model'
import { generateStudentId } from './user.utils'
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {}
  //if not use default password

  if (!password) {
    password = config.default_password as string
  } else {
    userData.password = password
  }
  //set the student role
  userData.role = 'Student'

  // const generateStudentId = (payload: TAcademicSemester) => {}
  //manually set the student id

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  )

  userData.id = await generateStudentId(admissionSemester)

  //create a new user
  const newUser = await User.create(userData) //built in static method

  //create a new student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id
    payload.user = newUser._id // reference id
    const newStudent = await Student.create(payload)
    return newStudent
  }
  return newUser
}

export const UserService = {
  createStudentIntoDB,
}
