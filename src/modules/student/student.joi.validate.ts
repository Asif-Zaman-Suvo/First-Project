import Joi from 'joi'

// Define Joi schema for the UserName subdocument
const userNameValidateSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .trim()
    .regex(/^[A-Za-z]+$/, { name: 'alphabetical' })
    .error(
      new Error(
        'First Name is required and should not be more than 20 characters, and must be capitalized',
      ),
    ),

  middleName: Joi.string().trim(),

  lastName: Joi.string()
    .required()
    .max(20)
    .trim()
    .regex(/^[A-Za-z]+$/, { name: 'alphabetical' })
    .error(
      new Error(
        'Last Name is required and should not be more than 20 characters',
      ),
    ),
})

// Define Joi schema for the Guardian subdocument
const guardianValidateSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
})

// Define Joi schema for the LocalGuardian subdocument
const localGuardianValidateSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
})

// Define Joi schema for the main Student document
const studentJoiValidateSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidateSchema.required(),
  gender: Joi.string().valid('Female', 'Male', 'Others').required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.string().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A',
    'B',
    'AB',
    'O',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidateSchema.required(),
  localGuardian: localGuardianValidateSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
})

export default studentJoiValidateSchema
