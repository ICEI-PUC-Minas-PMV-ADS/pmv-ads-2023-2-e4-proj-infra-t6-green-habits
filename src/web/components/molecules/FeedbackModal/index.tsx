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
  const iconType = success ? 'check-01' : error ? 'recycle' : undefined

  return (
    <div className={styles.modal}>
      {iconType && (
        <Icon icon={iconType} fill={success ? '#6BBD99' : '#914423'} />
      )}
      <Text>{text || (success ? successText : errorText)}</Text>
    </div>
  )
}
