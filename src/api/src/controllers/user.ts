import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/user";

interface CreateUserRequest {
  name: String;
  email: String;
  password: String;
}

const createUser = async (request: Request, response: Response, next: NextFunction) => {
  const { name, email, password } = request.body as CreateUserRequest;
  if (!name || !email || !password) {
    return response.status(400).json({ error: "Dados inválidos" });
  }
  try {
    const user = new UserModel({ name, email, password, habits: [] });
    let newUser = await user.save();

    response.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return response.status(400).json({ error: 'Email ja cadastrado' })
    }
    response.status(500).json({ error: 'Erro interno' });
  }
};

export { createUser };