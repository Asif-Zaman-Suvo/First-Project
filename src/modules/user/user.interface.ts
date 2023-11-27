export type TUser = {
  id: string
  password: string
  needPasswordChange: boolean
  role: 'Admin' | 'Student' | 'Faculty'
  status: 'In Progress' | 'Blocked'
  isDeleted: boolean
}
