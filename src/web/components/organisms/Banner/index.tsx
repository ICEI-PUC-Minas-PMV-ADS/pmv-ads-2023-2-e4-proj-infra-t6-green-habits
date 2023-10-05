import { Tag } from '@/components/atoms/Tag'
import Image from 'next/image'
import styles from './styles.module.scss'

interface BannerProps {
  image?: string
}

export const Banner = ({ image }: BannerProps) => {
  const background = {
    backgroundImage: `url(${image})`,
  }
  return (
    <section className={styles.banner}>
      <div className={styles.banner__image} style={background}>
        <div className={styles.banner__heading}>
          <Tag category='category' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Image
          src={'/line.png'}
          alt={''}
          width={34.365}
          height={1}
          className={styles.banner__line}
        />
      </div>
    </section>
  )
}
