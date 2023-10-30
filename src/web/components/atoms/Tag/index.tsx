import styles from './styles.module.scss'

interface TagProps {
  category?: string
  backgroundColor?: string
}

export const Tag = ({ category, backgroundColor }: TagProps) => {
  const classList = [styles.tag, styles[`tag--${backgroundColor}`]].join(' ')
  
  return (
    <div className={classList}>
      <p className={styles.tag__category}>{category}</p>
    </div>
  )
}
