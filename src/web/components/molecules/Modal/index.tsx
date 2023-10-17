'use client'
import { Icon } from '@/components/atoms/Icon'
import { Input } from '@/components/molecules/Input'
import { useEffect } from 'react'
import { Button } from '../../atoms/Button/index'

import styles from './styles.module.scss'

interface ModalProps {
  onClose: () => void
}

export const Modal = ({ onClose }: ModalProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onClose])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(`.${styles.modal}`)
      if (modal && !modal.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className={styles.modal}>
      <div className={styles.modal__closeButton} onClick={onClose}>
        <Icon icon='x' />
      </div>

      <Input
        label='Qual é a sua meta?'
        id='meta'
        placeholder='Reciclar uma vez ao mês'
        type='text'
        icon='pencil'
        isTextarea
        backgroundColor='white'
        color='black'
      />

      <div className={styles.modal__interaction}>
        <Button label='Adicionar Meta' level='primary' />
        <Button label='Fechar' level='tertiary' onClick={onClose} />
      </div>
    </div>
  )
}
