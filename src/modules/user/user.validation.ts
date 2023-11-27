import { z } from 'zod'

const userSchemaValidator = z.object({
  password: z
    .string({
      invalid_type_error: 'password is not a valid',
    })
    .max(20, { message: 'password should not be at more than 20 characters' })
    .optional(),
})

export const UserValidation = {
  userSchemaValidator,
}
