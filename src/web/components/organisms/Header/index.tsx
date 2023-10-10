import { Hero } from '@/components/molecules/Hero'
import { Navigation } from '@/components/molecules/Navbar'

export const Header = () => {
  return (
    <header>
      <Navigation />
      <Hero image='/bg.png' />
    </header>
  )
}
