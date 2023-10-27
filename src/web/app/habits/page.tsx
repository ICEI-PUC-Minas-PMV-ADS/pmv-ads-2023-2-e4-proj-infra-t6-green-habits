"use client";
import { Banner } from '@/components/organisms/Banner'
import { HabitsWrapper } from '@/components/organisms/HabitsWrapper'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Habits() {
  const router = useRouter();
  let userToken = localStorage.getItem("token");
  useEffect(() => {    
    if (!userToken) {
      router.push('/')
    }
  })
  return (
    userToken &&
    <main className={styles.habits}>
      <HabitsWrapper token={userToken} />
      <Banner image='/banner.png' />
    </main>

  )
}
