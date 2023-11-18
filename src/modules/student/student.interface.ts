export type UserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'Male' | 'Female'
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
  guardian: Guardian
  localGuadian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'blocked'
}
