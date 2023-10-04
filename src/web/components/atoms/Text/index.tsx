import styles from './styles.module.scss'

interface TextProps {
  align?: string
  children?: string
  color?: string
  weight?: string
}
export const Text = ({ align, children, color, weight }: TextProps) => {
  const classList = [
    styles[`text`],
    styles[`text--${align}`],
    styles[`text--${color}`],
    styles[`text--${weight}`],
  ].join(' ')

  return <p className={classList}>{children}</p>
}
