'use client'

import {
  LoginUserPayload,
  loginUser as loginUserApi,
} from '@/app/services/controllers/user'
import { Button } from '@/components/atoms/Button'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formLogin from '@/data/formLogin.json'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export const FormLogin = () => {
  let [email, setEmail] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log('email:', email)
    console.log('password:', password)
  }, [email, password])

  const handleButtonClick = async () => {
    try {
      await loginUser(email, password)
      setLoginSuccess(true)
      router.push('/')
    } catch (error) {
      setLoginError(true)
    } finally {
      setIsModalOpen(true)
    }
  }

  return (
    <form className={styles.formLogin}>
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
          onClick={(e) => {
            e.preventDefault()
            handleButtonClick()
          }}
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
            text='Ocorreu um erro durante o login.'
            success={false}
          />
        )}
        <Button isButton label='Esqueci a senha' level='tertiary' />
      </div>
    </form>
  )
}

const loginUser = async (email: string, password: string) => {
  const payload: LoginUserPayload = { email, password }
  try {
    const token = await loginUserApi(payload)
    console.log(token)
  } catch (error) {
    console.log(error)
  }
}
