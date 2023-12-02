import { z } from 'zod'

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
})

const updatedAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Updated Academic Faculty must be a string',
    }),
  }),
})

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
  updatedAcademicFacultyValidationSchema,
}
