import { Banner } from '@/components/organisms/Banner'
import { DownloadBanner } from '@/components/organisms/Download'
import styles from './homepage.module.scss'

export default function Home() {
  return (
    <main className={styles.homepage}>
      <DownloadBanner />
      <Banner image='/banner.png' />
    </main>
  )
}
