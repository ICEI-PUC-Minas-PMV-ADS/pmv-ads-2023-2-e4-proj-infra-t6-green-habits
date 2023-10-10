'use client'
import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import information from '@/data/information.json'
import Image from 'next/image'
import { useState } from 'react'
import styles from './styles.module.scss'

interface BannerProps {
  image?: string
}

export const Banner = ({ image }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % information.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + information.length) % information.length
    )
  }

  const currentInfo = information[currentIndex]

  const background = {
    backgroundImage: `url(${image})`,
  }

  return (
    <section className={styles.banner}>
      <div className={styles.banner__image} style={background}>
        <div className={styles.banner__container}>
          <Tag category={currentInfo.category} backgroundColor='dark-green'/>
          <p className={styles.banner__text}>{currentInfo.text}</p>
          <Image
            src={'/line.png'}
            alt={''}
            width={34.365}
            height={1}
            className={styles.banner__line}
          />
        </div>
        <div className={styles.banner__controls}>
          <Button
            hasIcon={true}
            icon='arrow-left'
            level='primary'
            onClick={handlePrev}
            size='small'
            aria='prev'
          />
          <Button
            hasIcon={true}
            icon='arrow-right'
            level='primary'
            onClick={handleNext}
            size='small'
            aria='next'
          />
        </div>
      </div>
    </section>
  )
}
