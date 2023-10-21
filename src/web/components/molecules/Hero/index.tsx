'use client'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { usePathname } from 'next/navigation'
import { getAllHabits } from '@/app/controllers/user'

interface HeroProps {
  image: string
}

export const Hero = ({ image }: HeroProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <section className={styles.hero}>
      <article className={styles.hero__container}>
        <h1 className={styles.hero__heading}>
          Adote o <strong className={styles.hero__strong}>Green Habits</strong>{' '}
          em sua rotina
        </h1>
        <Text
          align='left'
          children='Descubra o poder da sustentabilidade em pequenos hábitos diários'
          color='black'
        />
        <Button
          href={pathname === '/habits' ? '#habitsWrapper' : '/habits'}
          label='Meus hábitos'
          level='primary'
          className={styles.hero__button}
          isButton={false}
        />
      </article>
      <Image
        src={image}
        alt={''}
        width={557}
        height={541}
        className={styles.hero__image}
      />
    </section>
  )
}
