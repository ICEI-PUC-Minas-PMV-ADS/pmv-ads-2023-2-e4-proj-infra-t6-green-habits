import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'

interface LinkItemProps {
  href: string
  children?: string
  hasIcon?: boolean
  icon?: string
}
export const LinkItem = ({ href, children, hasIcon, icon }: LinkItemProps) => {
  return (
    <li className={styles.link}>
      {hasIcon ? (
        <>
          <Link href={href}> {children} </Link>
          <Icon icon={icon} />
        </>
      ) : (
        <Link href={href}> {children} </Link>
      )}
    </li>
  )
}
