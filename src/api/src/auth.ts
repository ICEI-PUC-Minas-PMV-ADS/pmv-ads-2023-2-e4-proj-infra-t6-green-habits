import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { ACCESS_TOKEN_PRIVATE_KEY, ACCESS_TOKEN_PUBLIC_KEY } from './config/envs';

export interface TokenPayload {
    userId: string
}

export const signJWT = (
    payload: { userId: string },
) => {
    const privateKey = Buffer.from(ACCESS_TOKEN_PRIVATE_KEY!, 'base64').toString('utf-8');
    return jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
    });
};

export const verifyJWT = (token: string): TokenPayload | null => {
    try {
        const publickKey = Buffer.from(ACCESS_TOKEN_PUBLIC_KEY!, 'base64').toString('utf-8');
        return jwt.verify(token, publickKey) as TokenPayload
    } catch (error) {
        return null;
    }
}