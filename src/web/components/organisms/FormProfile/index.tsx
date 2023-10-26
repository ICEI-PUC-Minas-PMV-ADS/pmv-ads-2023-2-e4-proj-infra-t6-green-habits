'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formProfile from '@/data/formProfile.json'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './styles.module.scss'

export const FormProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editSuccess, setEditSuccess] = useState(false)
  const [editError, setEditError] = useState(false)
  const router = useRouter()

  const handleSaveClick = async () => {
    try {
      setEditSuccess(true)
      router.push('/')
    } catch (error) {
      setEditError(true)
    } finally {
      setIsModalOpen(true)
    }
  }
  return (
    <section className={styles.formProfile}>
      <Heading
        align='center'
        children='Editar perfil'
        color='black'
        level='2'
      />
      <Text
        align='center'
        children='Altere ou exclua seu perfil nesta página'
        color='black'
      />
      <form className={styles.formProfile__form}>
        {formProfile.map((item, index) => (
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

        <div className={styles.formProfile__buttons}>
          <Button
            isButton
            label='Salvar alterações'
            level='primary'
            hasIcon
            icon='check-01'
            onClick={handleSaveClick}
          />
          {isModalOpen && editSuccess && (
            <FeedBackModal success={true} error={false} text='Alterações salvas com sucesso' />
          )}
          {isModalOpen && editError && (
            <FeedBackModal success={false} error={true} text='Error' />
          )}
          <Button
            isButton
            label='Excluir conta'
            level='tertiary'
            hasIcon
            icon='trash'
          />
          {isModalOpen && editSuccess && (
            <FeedBackModal success={true} error={false} text='Sua conta foi excluída com sucesso' />
          )}
          {isModalOpen && editError && (
            <FeedBackModal success={false} error={true} text='Error' />
          )}
        </div>
      </form>
    </section>
  )
}
