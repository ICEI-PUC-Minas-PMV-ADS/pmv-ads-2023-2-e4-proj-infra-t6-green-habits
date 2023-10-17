import { Banner } from '@/components/organisms/Banner'
import { DownloadBanner } from '@/components/organisms/Download'
import { HabitsWrapper } from '@/components/organisms/HabitsWrapper'
import styles from './homepage.module.scss'

export default function Home() {
  return (
    <main className={styles.homepage}>
      <HabitsWrapper />
      <DownloadBanner />
      <Banner image='/banner.png' />
    </main>
  )
}
