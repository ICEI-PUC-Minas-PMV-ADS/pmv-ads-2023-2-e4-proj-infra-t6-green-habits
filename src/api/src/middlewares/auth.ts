import { Request, Response } from 'express';
import UserModel from '../models/user';
import { verifyJWT } from '../auth';
import { AppError } from '../error';
import { ErrorReason, ErrorStatusCodes } from '../types/error';

export const authMiddleware = async (request: Request, response: Response, next) => {
    try {
        let { authorization } = request.headers;
        if (authorization && authorization.startsWith('Bearer')) {
            authorization = authorization.split(' ')[1];
            if (!authorization) {
                throw new AppError(ErrorReason.USER_NOT_LOGGED_IN, ErrorStatusCodes.UNAUTHORIZED)
            }
            const userId = verifyJWT(authorization)?.userId;
            if (!userId) {
                throw new AppError(ErrorReason.USER_NOT_LOGGED_IN, ErrorStatusCodes.BAD_REQUEST)
            }
            const user = await UserModel.findById(userId);

            if (!user) {
                throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
            }

            response.locals.user = user;
            return next();
        }
        throw new AppError(ErrorReason.USER_NOT_LOGGED_IN, ErrorStatusCodes.UNAUTHORIZED)
    }
    catch (error) {
        next(error)
    }
}