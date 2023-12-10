import { Schema, model } from 'mongoose'
import {
  TCourse,
  TCourseFaculty,
  TPreRequisiteCourse,
} from './course.interface'

const preRequisiteCourse = new Schema<TPreRequisiteCourse>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  prefix: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: Number,
    trim: true,
    required: true,
  },
  credits: {
    type: Number,
    trim: true,
    required: true,
  },
  preRequisiteCourse: [preRequisiteCourse],
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

export const Course = model<TCourse>('Course', courseSchema)

const courseFacultySchema = new Schema<TCourseFaculty>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    unique: true,
  },
  faculty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  ],
})

export const CourseFaculty = model<TCourseFaculty>(
  'CourseFaculty',
  courseFacultySchema,
)
