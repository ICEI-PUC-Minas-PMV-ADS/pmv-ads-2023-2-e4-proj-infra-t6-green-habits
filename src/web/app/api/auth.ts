'use client'

import { jwtDecode } from 'jwt-decode'

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY
  if (!secret) {
    throw new Error('JWT Secret key is not matched')
  }
  return new TextEncoder().encode(secret)
}

export function verifyJwtToken(token: string) {
  try {
    if (!token) {
      return ''
    }
    const { userId } = jwtDecode(token) as any
    console.log(userId)
    return userId
  } catch (error) {
    console.log(error)
    return ''
  }
}
