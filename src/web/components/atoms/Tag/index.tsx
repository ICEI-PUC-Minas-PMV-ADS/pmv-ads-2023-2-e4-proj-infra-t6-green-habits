import styles from './styles.module.scss'

interface TagProps {
  category: string
}

export const Tag = ({ category }: TagProps) => {
  return (
    <div className={styles.tag}>
      <p className={styles.tag__category}>{category}</p>
    </div>
  )
}
