import { z } from 'zod'

const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be a string',
      required_error: 'Academic Department must be required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string',
      required_error: 'Academic Faculty must be required',
    }),
  }),
})

const updateAcademicDepartmentValidationSchema = z.object({
  body: z
    .object({
      name: z.string({
        invalid_type_error: 'Academic Department must be a string',
        required_error: 'Academic Department must be required',
      }),
      academicFaculty: z.string({
        invalid_type_error: 'Academic Faculty must be string',
        required_error: 'Academic Faculty must be required',
      }),
    })
    .optional(),
})

export const AcademicDepartmentValidation = {
  academicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
}
