import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'

interface LinkItemProps {
  href: string
  children?: string
  hasIcon?: boolean
  icon?: string
  align?: string
  color?: string
  fill?: string
  weight?: string
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
}: LinkItemProps) => {
  const classList = [
    styles.link,
    styles[`link--${align}`],
    styles[`link--${color}`],
    styles[`link--${fill}`],
    styles[`link--${weight}`],
  ].join(' ')

  return (
    <li className={classList}>
      {hasIcon ? (
        <>
          <Link href={href}>
            {' '}
            {children}{' '}
          </Link>
          <Icon icon={icon} />
        </>
      ) : (
        <Link href={href}>
          {' '}
          {children}{' '}
        </Link>
      )}
    </li>
  )
}
