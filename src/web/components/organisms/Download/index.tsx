import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import styles from './styles.module.scss'

export const DownloadBanner = () => {
  return (
    <section className={styles.download}>
      <Heading
        level='3'
        align='center'
        children='Green Habits em suas mãos'
        color='white'
      />
      <div className={styles.download__container}>
        <Button
          isButton={false}
          label='Google Play'
          level='secondary'
          target='_blank'
          className={styles.download__button}
        />
        <Button
          isButton={false}
          label='App Store'
          level='secondary'
          target='_blank'
          className={styles.download__button}
        />
      </div>
    </section>
  )
}
