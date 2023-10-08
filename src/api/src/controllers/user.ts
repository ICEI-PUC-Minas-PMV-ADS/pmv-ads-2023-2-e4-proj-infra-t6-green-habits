import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/user";
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';

interface CreateUserRequest {
  name: String;
  email: String;
  password: String;
}

const createUser = async (request: Request, response: Response, next: NextFunction) => {
  const { name, email, password } = request.body as CreateUserRequest;
  if (!name || !email || !password) {
    throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
  }
  try {
    const user = new UserModel({ name, email, password, habits: [] });
    let newUser = await user.save();

    return response.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      let duplicateError = new AppError(ErrorReason.DUPLICATE_EMAIL, ErrorStatusCodes.BAD_REQUEST);
      return next(duplicateError)
    }
    next(error)
  }
};

export { createUser };