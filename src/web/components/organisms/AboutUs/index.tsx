import { FrameItem } from '@/components/molecules/FrameItem'
import styles from './styles.module.scss'

import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import about from '@/data/about.json'

export const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__heading}>
        <Heading level='3' align='left' children='Sobre nós' color='black' />
        <Text
          align='left'
          children='Nosso compromisso com um mundo sustentável'
          color='black'
        />
      </div>

      <div className={styles.about__container}>
        {about.map((item) => (
          <FrameItem
            icon={item.icon}
            frameText={item.frameText}
            frameTitle={item.frameTitle}
            key={item.frameTitle}
          />
        ))}
      </div>
    </section>
  )
}
