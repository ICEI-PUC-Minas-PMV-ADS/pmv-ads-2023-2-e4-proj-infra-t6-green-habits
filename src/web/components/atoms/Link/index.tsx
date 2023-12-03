import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'
import { CSSProperties } from 'react'

interface LinkItemProps {
  href: string
  children?: string
  hasIcon?: boolean
  icon?: string
  align?: string
  color?: string
  fill?: string
  weight?: string
  onClick?: () => void
  onCloseMenu?: () => void
  style?: CSSProperties
}
export const LinkItem = ({
  href,
  children,
  hasIcon,
  icon,
  align,
  color,
  fill,
  weight,
  onCloseMenu,
  
}: LinkItemProps) => {
  const classList = [
    styles.link,
    styles[`link--${align}`],
    styles[`link--${color}`],
    styles[`link--${fill}`],
    styles[`link--${weight}`],
  ].join(' ')

  const handleClick = () => {
    if (typeof onCloseMenu === 'function') {
      onCloseMenu()
    }
  }

  return (
    <li className={classList}>
      {hasIcon ? (
        <>
          <Link href={href} onClick={handleClick}>
            {' '}
            {children}{' '}
          </Link>
          <Icon icon={icon} />
        </>
      ) : (
        <Link href={href} onClick={handleClick}>
          {' '}
          {children}{' '}
        </Link>
      )}
    </li>
  )
}
