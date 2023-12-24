/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/appError'
import httpStatus from 'http-status'
import config from '../config'
import { TUserRole } from '../../modules/user/user.interface'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized to login',
      )
    }
    //check token is valid
    jwt.verify(
      token,
      config.JWT_ACCESS_TOKEN as string,
      function (err: any, decoded) {
        if (err) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized to login',
          )
        }

        const role = (decoded as JwtPayload).role

        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized to login',
          )
        }
        req.user = decoded as JwtPayload
        next()
      },
    )
  })
}

export default auth
