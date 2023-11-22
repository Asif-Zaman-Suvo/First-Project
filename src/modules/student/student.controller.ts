import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import studentZodValidatorData from './student.zod.validate'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    // const { error } = studentValidateSchema.validate(studentData)

    //zod validation
    const zodParseData = studentZodValidatorData.parse(studentData)

    //will call service function
    const result = await StudentServices.getStudentIntoDB(zodParseData)
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong during create student',
      error: err,
    })
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      message: 'Successfully get all students',
      success: true,
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong when get all students',
      error: err,
    })
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      message: 'Successfully get a single student',
      success: true,
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong when get single student',
      error: err,
    })
  }
}

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)
    res.status(200).json({
      message: 'Successfully deleted',
      success: true,
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong when delete single student',
      error: err,
    })
  }
}

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
}
