'use client'

import { Hero } from '@/components/molecules/Hero'
import { Navigation } from '@/components/molecules/Navbar'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const shouldRenderHeader = pathname !== '/login' && pathname !== '/register'

  return (
    <>
      {shouldRenderHeader && (
        <header>
          <Navigation />
          <Hero image='/bg.png' />
        </header>
      )}
    </>
  )
}