'use client'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/molecules/Input'
import formRegister from '@/data/formRegister.json'
import styles from './styles.module.scss'

export const FormRegister = () => {
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
          label='Salvar informações'
          level='primary'
          hasIcon
          icon='check-01'
        />
        <Button isButton label='Cancelar' level='tertiary' />
      </div>
    </form>
  )
}
