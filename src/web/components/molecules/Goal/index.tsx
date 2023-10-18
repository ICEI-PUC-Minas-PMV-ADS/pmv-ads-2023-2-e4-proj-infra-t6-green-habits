'use client'

import { Button } from '@/components/atoms/Button'
import styles from './styles.module.scss'

interface GoalProps {
  goal: string
  onToggle: () => void
  isChecked: boolean
}

export const Goal = ({ goal, onToggle, isChecked }: GoalProps) => {
  return (
    <label className={styles.goal} htmlFor={goal}>
      <input
        type='checkbox'
        className={styles.goal__input}
        onChange={onToggle}
        checked={isChecked}
        id={goal}
      />
      <p className={styles.goal__container}>
        <span className={styles.goal__text}>{goal}</span>
      </p>
      <Button
        hasIcon={true}
        icon={isChecked ? 'trash' : 'pencil'}
        size='small'
        className={styles.goal__button}
        aria={isChecked ? 'Apagar meta' : 'Editar meta'}
      />
    </label>
  )
}
