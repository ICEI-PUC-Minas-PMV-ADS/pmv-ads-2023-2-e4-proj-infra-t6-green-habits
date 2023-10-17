'use client'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/molecules/Input'
import formLogin from '@/data/formLogin.json'
import styles from './styles.module.scss'

export const FormLogin = () => {
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
          backgroundColor='gray'
          color='white'
        />
      ))}

      <div className={styles.formLogin__buttons}>
        <Button isButton label='Entrar' level='primary' />
        <Button isButton label='Esqueci a senha' level='tertiary' />
      </div>
    </form>
  )
}
