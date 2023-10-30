import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text align='center' children='Feito com' />
      <Icon icon='heart' fill='#AECFA4' />
      <Text align='center' children='para o mundo' />
    </footer>
  )
}
