import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../app/config'

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    needPasswordChange: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['Admin', 'Student', 'Faculty'],
    },
    status: {
      type: String,
      enum: ['In Progress', 'Blocked'],
      default: 'In Progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
)

//pre save middleware

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  //hashing password and save to db
  user.password = await bcrypt.hash(user.password, Number(config.salt_rounts))
  next()
})

//post save middleware
userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

export const User = model<TUser>('User', userSchema)
