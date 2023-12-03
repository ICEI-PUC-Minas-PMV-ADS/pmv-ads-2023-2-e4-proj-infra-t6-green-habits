'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { FeedBackModal } from '@/components/molecules/FeedbackModal'
import { Input } from '@/components/molecules/Input'
import formContact from '@/data/formContact.json'
import { useForm as useFormFormspree } from '@formspree/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'

export const FormContactUs = () => {
  const {
    handleSubmit: handleSubmitReactHookForm,
    register: registerReactHookForm,
    formState: { errors: errorsReactHookForm },
    reset: resetReactHookForm,
  } = useForm()

  const [state, handleSubmitFormspree] = useFormFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ''
  )

  const [isModalVisible, setModalVisible] = useState(false)

  const router = useRouter()

  useEffect(() => {
    registerReactHookForm('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })
  }, [registerReactHookForm])

  const handleModalOpen = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
    router.push('/')
    resetReactHookForm()
  }

  const handleFormSubmit = async (data) => {
    await handleSubmitReactHookForm(data)
    await handleSubmitFormspree(data)
    handleModalOpen()
  }

  return (
    <section className={styles.contact}>
      <Heading align='center' children='Fale conosco' color='black' level='2' />
      <Text
        align='left'
        children='Dúvidas? Sugestões? Reclamações? Preencha o formulário e aguarde nosso retorno'
        color='black'
      />

      <form
        className={styles.contact__form}
        onSubmit={handleSubmitReactHookForm(handleFormSubmit)}
      >
        {formContact.map((item, index) => (
          <div key={index}>
            <Input
              icon={item.icon}
              id={item.id}
              isTextarea={item.isTextarea}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              error={
                item.id === 'email'
                  ? errorsReactHookForm[item.id]?.message ||
                    (errorsReactHookForm['email']?.type === 'pattern'
                      ? 'Invalid email address'
                      : undefined)
                  : errorsReactHookForm[item.id]?.message || undefined
              }
              validation={item.validation}
              onKeyDown={() => {}}
              {...registerReactHookForm(item.id, {
                required: item.validation?.required,
              })}
              backgroundColor='gray'
              color='white'
            />
          </div>
        ))}
        <Button
          isButton
          label='Enviar'
          level='primary'
          onClick={handleModalOpen}
        />
      {isModalVisible && state.succeeded && (
        <div className={styles.contact__container}>
          <FeedBackModal
            success={
              state.succeeded && Object.keys(errorsReactHookForm).length === 0
            }
            error={
              state.errors !== undefined ||
              Object.keys(errorsReactHookForm).length > 0
            }
            text={
              state.succeeded && Object.keys(errorsReactHookForm).length === 0
                ? 'Formulário enviado com sucesso.'
                : 'Ocorreu um erro durante a operação.'
            }
          />
          <Button level='secondary' label='Finalizar o contato' onClick={handleModalClose} />
        </div>
      )}
      </form>
    </section>
  )
}
