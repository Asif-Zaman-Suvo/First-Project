import { TStudent } from './student.interface'
import { Student } from './student.model'

const getStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isStudentExist(studentData.id)) {
    throw new Error('Student already exists')
  }
  const result = await Student.create(studentData) //built in static method
  return result
  //buit in instance methods
  // const student = new Student(studentData)
  // const result = await student.save()
  // return result
  // //custom instance methods
  // const student = new Student(studentData)
  // if (await student.isStudentExist(studentData.id)) {
  //   throw new Error('Student already exists')
  // }

  //static method
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true })
  return result
}

export const StudentServices = {
  getStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
}
