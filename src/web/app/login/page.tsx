'use client'

import { HeroUnlogged } from '@/components/molecules/HeroUnlogged'
import { Banner } from '@/components/organisms/Banner'
import { FormLogin } from '@/components/organisms/FormLogin'
import styles from './styles.module.scss'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const checkAuthentication = () => {
  const authToken = localStorage.getItem('authToken')

  return !!authToken
}

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = checkAuthentication()

    if (isAuthenticated) {
      router.push('/')
    }
  }, [])

  return (
    <main className={styles.login}>
      <section className={styles.login__header}>
        <HeroUnlogged />
        <FormLogin />
      </section>
      <section className={styles.login__banner}>
        <Banner image='/banner.png' />
      </section>
    </main>
  )
}
