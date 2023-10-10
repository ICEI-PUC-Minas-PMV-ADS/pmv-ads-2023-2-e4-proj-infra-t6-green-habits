'use client'
import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { LinkItem } from '@/components/atoms/Link'
import navigation from '@/data/navigation.json'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280)

      if (isMenuOpen && !isDesktop) {
        setIsMenuOpen(false)
      }
    }

    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 1280)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isMenuOpen, isDesktop])

  return (
    <nav
      className={`${styles.navigation} ${
        isMenuOpen ? styles.navigation__open : ''
      }`}
    >
      {!isMenuOpen && <Icon icon='leaf' fill='#398278' />}
      <ul
        className={`${styles.navigation__menu} ${
          isDesktop
            ? styles['navigation__menu--desktop']
            : isMenuOpen
            ? styles['navigation__menu--open']
            : styles['navigation__menu--closed']
        }`}
      >
        {navigation.map((item) => (
          <LinkItem
            key={item.children}
            href={item.href}
            children={item.children}
            hasIcon={item.hasIcon}
            color={item.color}
            weight={activeItem ? '600' : '300'}
            onCloseMenu={() => setIsMenuOpen(false)}
          />
        ))}
        <Button
          label='Contato'
          level='primary'
          isButton={false}
          href='/contact'
          className={styles.navigation__button}
        />
      </ul>
      {!isDesktop && (
        <button
          onClick={toggleMenu}
          className={styles.navigation__toggle}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon icon={isMenuOpen ? 'x' : 'menu'} fill='#398278' />
        </button>
      )}
    </nav>
  )
}
