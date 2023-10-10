import dotenv from 'dotenv';
dotenv.config();

export const { MONGODB_URI, ACCESS_TOKEN_PRIVATE_KEY, ACCESS_TOKEN_PUBLIC_KEY } = process.env;