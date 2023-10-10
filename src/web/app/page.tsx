import { Banner } from '@/components/organisms/Banner'
import { DownloadBanner } from '@/components/organisms/Download'

export default function Home() {
  return (
    <main>
      <DownloadBanner />
      <Banner image='/banner.png' />
    </main>
  )
}
