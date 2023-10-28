'use client'

import { Button } from '@/components/atoms/Button'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formRegister from '@/data/formRegister.json'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles.module.scss'

export const FormRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [registerError, setRegisterError] = useState(false)
  const router = useRouter()

  const handleSaveClick = async () => {
    try {
      setRegisterSuccess(true);
      router.push('/');
    } catch (error) {
      setRegisterError(true);
    } finally {
      setIsModalOpen(true);
    }
  }
 
  return (
    <form className={styles.formRegister}>
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
        />
      ))}

      <div className={styles.formRegister__buttons}>
        <Button
          isButton
          label='Concluir cadastro'
          level='primary'
          hasIcon
          icon='check-01'
          onClick={handleSaveClick}
        />
        <Button isButton label='Cancelar' level='tertiary' />
      </div>
      {isModalOpen && registerSuccess && (
        <FeedBackModal success={true} error={false} text='Damos as boas-vindas ao Green Habits' />
      )}
      {isModalOpen && registerError && (
        <FeedBackModal success={false} error={true} text='Error' />
      )}
    </form>
  )
}
