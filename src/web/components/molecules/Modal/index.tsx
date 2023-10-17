import { Icon } from '@/components/atoms/Icon'
import { Input } from '@/components/molecules/Input'
import { Button } from '../../atoms/Button/index'

import styles from './styles.module.scss'

export const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__closeButton}>
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
        <Button label='Fechar' level='tertiary' />
      </div>
    </div>
  )
}
