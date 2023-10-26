'use client'

import {
  ApiResponse,
  LoginUserPayload,
  loginUser as loginUserApi,
} from '@/app/services/controllers/user'
import { Button } from '@/components/atoms/Button'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formLogin from '@/data/formLogin.json'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import { AxiosError } from 'axios'

export const FormLogin = () => {
  let [email, setEmail] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()

  const handleLoginSubmit = async (email: string, password: string) => {
    const payload: LoginUserPayload = { email, password };
    try {
      await loginUserApi(payload)
      setLoginSuccess(true)
      router.push('/')
    } catch (error) {
      const err = error as AxiosError;
      const res = err.response?.data as ApiResponse;
      const errorMessage = `Ocorreu um erro durante o login: ${res.data}`;
      setLoginError(errorMessage)
      console.log(res)
    } finally {
      setIsModalOpen(true)
    }
  }

  return (
    <form className={styles.formLogin} onSubmit={(e) => e.preventDefault()}>
      {formLogin.map((item, index) => (
        <Input
          key={index}
          id={item.id}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          icon={item.icon}
          validation={item.validation}
          onChange={(e) => {
            let currentValue = e.target.value
            if (item.id === 'email') {
              setEmail(currentValue)
            }
            if (item.id === 'password') {
              setPassword(currentValue)
            }
          }}
          backgroundColor='gray'
          color='white'
        />
      ))}

      <div className={styles.formLogin__buttons}>
        <Button
          isButton
          label='Entrar'
          level='primary'
          onClick={async () => await handleLoginSubmit(email, password)}
        />
        {isModalOpen && loginSuccess && (
          <FeedBackModal
            success={true}
            text='Login realizado com sucesso!'
            error={false}
          />
        )}
        {isModalOpen && loginError && (
          <FeedBackModal
            error={true}
            text={loginError}
            success={false}
          />
        )}
        <Button isButton label='Esqueci a senha' level='tertiary' />
      </div>
    </form>
  )
}
