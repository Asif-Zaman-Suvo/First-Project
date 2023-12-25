/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface TUser {
  id: string
  password: string
  needPasswordChange: boolean
  role: 'Admin' | 'Student' | 'Faculty'
  status: 'In Progress' | 'Blocked'
  isDeleted: boolean
  passwordChangedAt?: Date
}

export interface UserModel extends Model<TUser> {
  isUserExistByCustomId(id: string): Promise<TUser>
  isPasswordMatched(plainText: string, hashedPassword: string): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
