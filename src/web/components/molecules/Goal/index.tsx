'use client'

import { Button } from '@/components/atoms/Button'
import { useState } from 'react'
import styles from './styles.module.scss'

interface GoalProps {
  goal?: string
}

export const Goal = ({ goal }: GoalProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <label className={styles.goal} htmlFor={goal}>
      <input
        type='checkbox'
        className={styles.goal__input}
        onChange={handleCheckboxChange}
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
      />
    </label>
  )
}
