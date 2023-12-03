'use client'

import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/molecules/Input'
import { useState } from 'react'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)

  const handleForgotPasswordSubmit = async () => {
    if (email.trim() !== '') {
      setIsEmailSubmitted(true)
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
    }
  }
  return (
    <div>
      <Input
        id='forgotPasswordEmail'
        label='Digite seu email'
        type='email'
        placeholder='karen.sirko@mail.com'
        onChange={(e) => setEmail(e.target.value)}
        backgroundColor='gray'
        color='white'
        icon='pencil'
      />
      <Button
        isButton
        label='Enviar senha'
        level='primary'
        onClick={handleForgotPasswordSubmit}
      />
      {isEmailError && (
        <Text
          align='center'
          children='Por favor, insira um email.'
          color='orange'
        />
      )}
      {isEmailSubmitted && email.trim() !== '' && (
        <Text
          align='center'
          children='Senha enviada para o email fornecido.'
          color='green'
        />
      )}
    </div>
  )
}
