import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/user";
import { signJWT } from '../auth';

interface LoginRequest {
    email: String;
    password: String;
}

const loginUser = async (request: Request, response: Response, next: NextFunction) => {
    const { email, password } = request.body as LoginRequest;
    if (!email || !password) {
        return response.status(400).json({ error: "Dados inválidos" });
    }
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            const userPassword = user.password;
            if (userPassword !== password) {
                return response.status(401).json({ error: "Credenciais inválidas" });
            }
            const token = signJWT({ userId: user.id });
            return response.status(200).json({ token })
        } else {
            return response.status(401).json({ error: "Credenciais inválidas" });
        }
    } catch (error) {
        console.error(error);
    }
}

export { loginUser }