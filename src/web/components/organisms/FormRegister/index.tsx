'use client'

import { Button } from '@/components/atoms/Button'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formRegister from '@/data/formRegister.json'
import {
  ApiResponse,
  RegisterUserPayload,
  registerUser,
} from '@/services/controllers/user'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles.module.scss'

export const FormRegister = () => {
  let [email, setEmail] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  let [name, setName] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [registerError, setRegisterError] = useState<string | null>(null)
  const router = useRouter()

  const handleRegisterSubmit = async (
    name: string,
    email: string,
    password: string
  ) => {
    const payload: RegisterUserPayload = { name, email, password }
    try {
      await registerUser(payload)
      setRegisterSuccess(true)
      router.push('/habits')
    } catch (error) {
      const err = error as AxiosError
      const res = err.response?.data as ApiResponse<string>
      const errorMessage = `Ocorreu um erro durante o cadastro: ${res.data}`
      setRegisterError(errorMessage)
      console.log(res)
    } finally {
      setIsModalOpen(true)
    }
  }

  const handleCancelClick = () => {
    router.push('/login')
  }

  return (
    <form className={styles.formRegister} onSubmit={(e) => e.preventDefault()}>
      {formRegister.map((item, index) => (
        <Input
          key={index}
          id={item.id}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          icon={item.icon}
          backgroundColor='gray'
          color='white'
          onChange={(e) => {
            let currentValue = e.target.value
            if (item.id === 'name') {
              setName(currentValue)
            }
            if (item.id === 'email') {
              setEmail(currentValue)
            }
            if (item.id === 'password') {
              setPassword(currentValue)
            }
          }}
        />
      ))}

      <div className={styles.formRegister__buttons}>
        <Button
          isButton
          label='Concluir cadastro'
          level='primary'
          hasIcon
          icon='check-01'
          onClick={async () =>
            await handleRegisterSubmit(name, email, password)
          }
        />
        <Button
          isButton
          label='Cancelar'
          level='tertiary'
          onClick={handleCancelClick}
        />
      </div>
      {isModalOpen && registerSuccess && (
        <FeedBackModal
          success={true}
          error={false}
          text='Damos as boas-vindas ao Green Habits'
        />
      )}
      {isModalOpen && registerError && (
        <FeedBackModal success={false} error={true} text={registerError} />
      )}
    </form>
  )
}
