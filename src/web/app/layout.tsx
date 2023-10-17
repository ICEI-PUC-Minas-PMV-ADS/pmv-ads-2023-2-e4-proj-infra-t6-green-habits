'use client'
import { Sprites } from '@/components/ions/Sprites'
import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/organisms/Header'
import '@/styles/main.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import styles from './layout.module.scss'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const metadata: Metadata = {
  title: 'Green Habits',
  description:
    'Solução prática ao oferecer desafios baseados em sugestões pré-definidas, permitindo que os usuários estabeleçam metas para incorporar práticas ecológicas em suas rotinas diárias, promovendo um estilo de vida mais responsável e consciente.',
  icons: {
    icon: './icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()

  const shouldRenderHeader = pathname !== '/login' && pathname !== '/register'

  return (
    <html lang='pt'>
      <body className={poppins.className}>
        {shouldRenderHeader && (
          <section className={styles.layout}>
            <Header />
          </section>
        )}
        {children}
        <Sprites />
        <Footer />
      </body>
    </html>
  )
}
