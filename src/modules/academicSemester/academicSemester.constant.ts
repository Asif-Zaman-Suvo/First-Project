import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface'

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const AcademicSemesterName: TAcademicSemesterName[] = [
  'Fall',
  'Spring',
  'Summer',
]

export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03']

export type TAcademicSemesterCodeMapper = {
  [key: string]: string
}
export const academicSemesterCodeMapper: TAcademicSemesterCodeMapper = {
  Fall: '01',
  Spring: '02',
  Summer: '03',
}
