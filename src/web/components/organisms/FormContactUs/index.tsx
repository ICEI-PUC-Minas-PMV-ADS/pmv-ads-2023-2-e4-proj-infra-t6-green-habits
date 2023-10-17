'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'

import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/molecules/Input'
import formContact from '@/data/formContact.json'
// import { useForm as useFormFormspree } from '@formspree/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'

export const FormContactUs = () => {
  const {
    handleSubmit: handleSubmitReactHookForm,
    register: registerReactHookForm,
    formState: { errors: errorsReactHookForm },
    reset: resetReactHookForm,
  } = useForm()

  // const [state, handleSubmitFormspree] = useFormFormspree(
  //   process.env.NEXT_PUBLIC_FORMSPREE_ID
  // )

  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    registerReactHookForm('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })
  }, [registerReactHookForm])
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
        onSubmit={(event) => {
          handleSubmitReactHookForm((data) => {})(event)
          // handleSubmitFormspree(event)
        }}
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
                errorsReactHookForm[item.id]?.message ||
                (item.id === 'email' &&
                errorsReactHookForm['email']?.type === 'pattern'
                  ? 'Invalid email address'
                  : undefined)
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
        <Button isButton label='Enviar' level='primary' />
      </form>
      {/* {state.succeeded && <p>all clear</p>} */}
    </section>
  )
}
