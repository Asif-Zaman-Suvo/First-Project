import { Schema, model } from 'mongoose'
import { TAcademicSemester } from './academicSemester.interface'
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant'
import AppError from '../../app/errors/appError'

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    year: {
      type: String,
      required: true,
    },
    startDate: { type: String, required: true, enum: Months },
    endDate: { type: String, required: true, enum: Months },
  },
  {
    timestamps: true,
  },
)

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  })

  if (isSemesterExists) {
    throw new AppError(404, 'Semester already exists')
  }
  next()
})

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
)
