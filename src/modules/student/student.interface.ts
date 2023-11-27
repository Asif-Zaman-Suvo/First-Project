// import { StudentModel } from './student.interface'
import { Model, Types } from 'mongoose'

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  name: TUserName
  password: string
  gender: 'Male' | 'Female' | 'Others'
  email: string
  avatar?: string
  dateOfBirth?: string
  contactNo: string
  emergencyContactNo?: string
  bloodGroup?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-'
  presentAddress?: string
  permanentAddress?: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isDeleted: boolean
}

//for creating static

export interface StudentModel extends Model<TStudent> {
  isStudentExist(id: string): Promise<TStudent | null>
}

//for creating instances

// export type StudentMethods = {
//   isStudentExist(id: string): Promise<TStudent | null>
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >
