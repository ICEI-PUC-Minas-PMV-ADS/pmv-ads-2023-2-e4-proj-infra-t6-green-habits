import { Banner } from '@/components/organisms/Banner'
import { DownloadBanner } from '@/components/organisms/Download'
import styles from './homepage.module.scss'
import { HabitsWrapper } from '@/components/organisms/HabitsWrapper'

export default function Home() {
  return (
    <main className={styles.homepage}>
      <HabitsWrapper />
      <DownloadBanner />
      <Banner image='/banner.png' />
    </main>
  )
}
