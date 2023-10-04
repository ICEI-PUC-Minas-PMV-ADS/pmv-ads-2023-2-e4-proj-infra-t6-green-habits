import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

interface FrameProps {
  icon?: string
  frameTitle?: string
  frameText?: string
}

export const FrameItem = ({ icon, frameTitle, frameText }: FrameProps) => {
  return (
    <article className={styles.frame}>
      <div className={styles.frame__container}>
        <Icon icon={icon} fill='#398278' />
        <Text align='left' children={frameTitle} weight='700' />
      </div>
      <Text align='left' children={frameText} />
    </article>
  )
}
