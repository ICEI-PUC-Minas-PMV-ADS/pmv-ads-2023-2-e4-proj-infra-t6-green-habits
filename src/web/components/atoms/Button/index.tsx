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
        <button onClick={onClick} className={classList} aria-label={aria}>
          {label}
          {hasIcon && <Icon icon={icon} />}
        </button>
      ) : (
        <Link href={href || ''} target={target} className={classList}>
          {label}
          {hasIcon && <Icon icon={icon} />}
        </Link>
      )}
    </>
  )
}
