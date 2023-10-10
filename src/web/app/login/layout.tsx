import '@/styles/main.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
