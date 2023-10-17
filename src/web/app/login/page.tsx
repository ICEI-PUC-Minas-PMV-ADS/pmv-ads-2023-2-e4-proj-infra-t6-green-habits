'use client'

import { HeroUnlogged } from '@/components/molecules/HeroUnlogged'
import { Banner } from '@/components/organisms/Banner'
import { FormLogin } from '@/components/organisms/FormLogin'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <main className={styles.login}>
      <section className={styles.login__header}>
        <HeroUnlogged />
        <FormLogin />
      </section>
      <section></section>
      <Banner image='/banner.png' />
    </main>
  )
}
