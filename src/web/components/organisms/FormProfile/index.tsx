'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/molecules/Input'
import formProfile from '@/data/formProfile.json'
import styles from './styles.module.scss'

export const FormProfile = () => {
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
          />
          <Button
            isButton
            label='Excluir conta'
            level='tertiary'
            hasIcon
            icon='trash'
          />
        </div>
      </form>
    </section>
  )
}
