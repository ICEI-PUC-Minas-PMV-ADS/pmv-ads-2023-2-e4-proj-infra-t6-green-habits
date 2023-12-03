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
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string
  type?: string
  size?: string
  aria?: string
  role?: string
  children?: React.ReactNode;
  tabIndex?: number
  disabled?: boolean
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
  role,
  tabIndex,
  disabled
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
        <button onClick={onClick} className={classList} aria-label={aria} role={role} tabIndex={tabIndex}>
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
