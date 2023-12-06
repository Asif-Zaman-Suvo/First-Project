import { TErrorSource, TGenericErrorResponse } from './../interface/error'

const handleDuplicateError = (err: string): TGenericErrorResponse => {
  const regex = /name: "([^"]+)"/

  // Use the exec method to extract the matched value
  const match = regex.exec(err)

  // Check if there is a match and get the department name
  const departmentName = match ? match[1] : null

  const errorSource: TErrorSource = [
    {
      path: '',
      message: departmentName
        ? `${departmentName} is already in the department`
        : 'Department not specified in the error message',
    },
  ]

  const statusCode = 400

  return {
    statusCode,
    message: 'Duplicate error',
    errorSource,
  }
}

export default handleDuplicateError
