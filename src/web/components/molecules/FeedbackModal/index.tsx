'use client'

import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

interface FeedBackModalProps {
  success: boolean
  error: boolean
  text?: string
}

export const FeedBackModal = ({ success, error, text }: FeedBackModalProps) => {
  const successText = 'Operação realizada com sucesso!'
  const errorText = 'Ocorreu um erro durante a operação.'
  return (
    <div className={styles.modal}>
      <Icon icon='tulip' fill='#398278' />
      {success && <Text>{text || successText}</Text>}
      {error && <Text>{text || errorText}</Text>}
    </div>
  )
}
