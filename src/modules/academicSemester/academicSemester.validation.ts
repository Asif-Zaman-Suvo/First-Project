import { z } from 'zod'
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant'

const academicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...(AcademicSemesterName as [string, ...string[]])]),
    code: z.enum([...(AcademicSemesterCode as [string, ...string[]])]),
    year: z.string(),
    startDate: z.enum([...Months] as [string, ...string[]]),
    endDate: z.enum([...Months] as [string, ...string[]]),
    // admissionSemester: z.string(),
  }),
})

const updatedAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...(AcademicSemesterName as [string, ...string[]])])
      .optional(),
    code: z
      .enum([...(AcademicSemesterCode as [string, ...string[]])])
      .optional(),
    year: z.string().optional(),
    startDate: z.enum([...Months] as [string, ...string[]]).optional(),
    endDate: z.enum([...Months] as [string, ...string[]]).optional(),
    // admissionSemester: z.string(),
  }),
})

export const academicSemesterValidation = {
  academicSemesterValidationSchema,
  updatedAcademicSemesterValidationSchema,
}
