import { createElement } from 'react'
import styles from './styles.module.scss'

interface HeadingsProps {
  align: string
  children: string
  color: string
  level: string
}
export const Heading = ({ align, children, color, level }: HeadingsProps) => {
  const classList = [
    styles.heading,
    styles[`heading--${align}`],
    styles[`heading--${color}`],
    styles[`heading--h${level}`],
  ].join(' ')

  const props = { className: classList }
  const element = createElement('h' + level, props, children)

  return element
}
