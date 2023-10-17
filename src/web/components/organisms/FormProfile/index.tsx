'use client'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/molecules/Input'
import formProfile from '@/data/formProfile.json'
import styles from './styles.module.scss'

export const FormProfile = () => {
  return (
    <form className={styles.formProfile}>
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
  )
}
