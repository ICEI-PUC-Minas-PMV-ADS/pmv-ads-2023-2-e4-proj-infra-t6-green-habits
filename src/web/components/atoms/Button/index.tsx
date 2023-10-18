import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  className?: string
  href?: string
  icon?: string
  isButton?: boolean
  hasIcon?: boolean
  label?: string
  level?: string
  onClick?: () => void
  target?: string
  type?: string
  size?: string
  aria?: string
  role?: string
  children?: React.ReactNode;
}

export const Button = ({
  className = '',
  href,
  isButton = true,
  hasIcon = false,
  icon,
  label,
  level,
  onClick,
  target,
  size,
  aria,
  role
}: ButtonProps) => {
  const classList = [
    styles.button,
    styles[`button--${level}`],
    styles[`button--${size}`],
    hasIcon ? styles.button__icon : '',
    className,
  ].join(' ')

  return (
    <>
      {isButton ? (
        <button onClick={onClick} className={classList} aria-label={aria} role={role}>
          {label}
          {hasIcon && <Icon icon={icon} />}
        </button>
      ) : (
        <Link href={href || ''} target={target} className={classList} role={role} onClick={onClick}>
          {label}
          {hasIcon && <Icon icon={icon} />}
        </Link>
      )}
    </>
  )
}
