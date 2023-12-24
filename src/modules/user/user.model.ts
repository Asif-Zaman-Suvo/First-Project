import { Schema, model } from 'mongoose'
import { TUser, UserModel } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../app/config'

const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
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

userSchema.statics.isUserExistByCustomId = async function (id: string) {
  return await User.findOne({ id })
}
userSchema.statics.isPasswordMatched = async function (
  plainText,
  hashedPassword,
) {
  return await bcrypt.compare(plainText, hashedPassword)
}

export const User = model<TUser, UserModel>('User', userSchema)
