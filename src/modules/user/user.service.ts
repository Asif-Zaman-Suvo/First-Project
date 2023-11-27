import config from '../../app/config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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
  //manually set the student id

  userData.id = '203010001'

  //create a new user
  const newUser = await User.create(userData) //built in static method

  //create a new student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id
    studentData.user = newUser._id // reference id
    const newStudent = await Student.create(studentData)
    return newStudent
  }
  return newUser
}

export const UserService = {
  createStudentIntoDB,
}
