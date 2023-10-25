'use client'

import { HeroUnlogged } from '@/components/molecules/HeroUnlogged'
import { Banner } from '@/components/organisms/Banner'
import { FormRegister } from '@/components/organisms/FormRegister'
import styles from './styles.module.scss'

export default function Register() {
  return (
    <main className={styles.register}>
      <section className={styles.register__header}>
        <HeroUnlogged />
        <FormRegister />
      </section>
      <section className={styles.register__banner}>
        <Banner image='/banner.png' />
      </section>
    </main>
  )
}
