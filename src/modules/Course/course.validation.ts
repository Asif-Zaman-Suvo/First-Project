import { z } from 'zod'

const preRequisiteCourseValidation = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
})
const updatePreRequisiteCourseValidation = z.object({
  course: z.string().optional(),
  isDeleted: z.boolean().optional(),
})

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourse: z.array(preRequisiteCourseValidation).optional(),
    isDeleted: z.boolean().optional(),
  }),
})
const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourse: z.array(updatePreRequisiteCourseValidation).optional(),
    isDeleted: z.boolean().optional(),
  }),
})

const assignFacultyWithCourseSchema = z.object({
  faculty: z.array(z.string()),
})

export const CourseValidation = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
  assignFacultyWithCourseSchema,
}
