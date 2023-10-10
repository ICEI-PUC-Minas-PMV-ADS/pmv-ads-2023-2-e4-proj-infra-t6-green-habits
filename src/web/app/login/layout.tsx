import '@/styles/main.scss'
import type { Metadata } from 'next'

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
  return <>{children}</>
}
