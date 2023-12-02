import { z } from 'zod'

const userNameZodValidator = z.object({
  firstName: z.string().max(20, {
    message: 'First Name should be equal or less than 20 characters',
  }),
  middleName: z.string().max(20, {
    message: 'Middle Name should be equal or less than 20 characters',
  }),
  lastName: z.string().max(20, {
    message: 'Last Name should be equal or less than 20 characters',
  }),
})
const updateUserNameZodValidator = z.object({
  firstName: z
    .string()
    .max(20, {
      message: 'First Name should be equal or less than 20 characters',
    })
    .optional(),
  middleName: z
    .string()
    .max(20, {
      message: 'Middle Name should be equal or less than 20 characters',
    })
    .optional(),
  lastName: z
    .string()
    .max(20, {
      message: 'Last Name should be equal or less than 20 characters',
    })
    .optional(),
})

const guardianZodValidator = z.object({
  fatherName: z.string().max(20, {
    message: 'fathers name should be equal or less than 20 characters',
  }),

  fatherOccupation: z.string().max(20, {
    message: 'fathers occupation should be equal or less than 20 characters',
  }),

  fatherContactNo: z
    .string()
    .max(11, { message: 'fathers contact no should be equal 11 charecters' }),

  motherName: z.string().max(20, {
    message: 'fathers name should be equal or less than 20 characters',
  }),
  motherOccupation: z.string().max(20, {
    message: 'mothers occupation should be equal or less than 20 characters',
  }),
  motherContactNo: z
    .string()
    .max(11, { message: 'mothers contact no should be equal 11 charecters' }),
})

const updateGuardianZodValidator = z.object({
  fatherName: z
    .string()
    .max(20, {
      message: 'fathers name should be equal or less than 20 characters',
    })
    .optional(),

  fatherOccupation: z
    .string()
    .max(20, {
      message: 'fathers occupation should be equal or less than 20 characters',
    })
    .optional(),

  fatherContactNo: z
    .string()
    .max(11, { message: 'fathers contact no should be equal 11 charecters' })
    .optional(),

  motherName: z
    .string()
    .max(20, {
      message: 'fathers name should be equal or less than 20 characters',
    })
    .optional(),
  motherOccupation: z
    .string()
    .max(20, {
      message: 'mothers occupation should be equal or less than 20 characters',
    })
    .optional(),
  motherContactNo: z
    .string()
    .max(11, { message: 'mothers contact no should be equal 11 charecters' })
    .optional(),
})

const localGuardianZodValidator = z.object({
  name: z.string().max(20, {
    message: 'local guardian name should be or less than 20 charecters',
  }),
  occupation: z.string().max(20, {
    message: 'local guardian occupation should be or less than 20 charecters',
  }),
  contactNo: z.string().max(11, {
    message: 'local guardians contact no should be equal 11 charecters',
  }),
  address: z.string().max(20, {
    message: 'local guardian address should be or less than 20 charecters',
  }),
})

const updateLocalGuardianZodValidator = z.object({
  name: z
    .string()
    .max(20, {
      message: 'local guardian name should be or less than 20 charecters',
    })
    .optional(),
  occupation: z
    .string()
    .max(20, {
      message: 'local guardian occupation should be or less than 20 charecters',
    })
    .optional(),
  contactNo: z
    .string()
    .max(11, {
      message: 'local guardians contact no should be equal 11 charecters',
    })
    .optional(),
  address: z
    .string()
    .max(20, {
      message: 'local guardian address should be or less than 20 charecters',
    })
    .optional(),
})

const studentZodValidatorData = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameZodValidator,
      gender: z.enum(['Male', 'Female', 'Others']),
      email: z.string().email({ message: 'Invalid email address' }),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().min(1).max(11),
      emergencyContactNo: z.string().min(1),
      bloodGroup: z.enum([
        'A',
        'B',
        'AB',
        'O',
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-',
      ]),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      guardian: guardianZodValidator,
      localGuardian: localGuardianZodValidator,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
})

const updateStudentZodValidatorData = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameZodValidator,
      gender: z.enum(['Male', 'Female', 'Others']).optional(),
      email: z.string().email({ message: 'Invalid email address' }).optional(),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().min(1).max(11).optional(),
      emergencyContactNo: z.string().min(1).optional(),
      bloodGroup: z
        .enum([
          'A',
          'B',
          'AB',
          'O',
          'A+',
          'A-',
          'B+',
          'B-',
          'AB+',
          'AB-',
          'O+',
          'O-',
        ])
        .optional(),
      presentAddress: z.string().min(1).optional(),
      permanentAddress: z.string().min(1).optional(),
      guardian: updateGuardianZodValidator.optional(),
      localGuardian: updateLocalGuardianZodValidator.optional(),
      profileImg: z.string().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
})

export const studentValidations = {
  studentZodValidatorData,
  updateStudentZodValidatorData,
}
