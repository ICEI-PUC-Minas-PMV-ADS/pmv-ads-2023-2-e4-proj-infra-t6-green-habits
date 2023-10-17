'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Goal } from '@/components/molecules/Goal'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

export const GoalsWrapper = () => {
  const generateUniqueId = () => uuidv4()

  const [goals, setGoals] = useState([
    { id: generateUniqueId(), goal: 'Objetivo 1', isChecked: false },
    { id: generateUniqueId(), goal: 'Objetivo 2', isChecked: false },
    { id: generateUniqueId(), goal: 'Objetivo 3', isChecked: false },
    { id: generateUniqueId(), goal: 'Objetivo 4', isChecked: false },
    { id: generateUniqueId(), goal: 'Objetivo 5', isChecked: false },
  ])

  const toggleGoal = (goalId: string) => {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === goalId) {
          return { ...goal, isChecked: !goal.isChecked }
        }
        return goal
      })
    })
  }

  return (
    <>
      <section className={styles.goals}>
        <Heading align='center' children='Metas' color='black' level='2' />
        <div className={styles.goals__textContainer}>
          <Text
            align='left'
            children='Nossa rota para a sustentabilidade: suas metas no Green Habits'
            color='black'
          />
          <Button label='Criar meta' level='primary' />
        </div>

        <div className={styles.goals__container}>
          {goals
            .filter((goal) => !goal.isChecked)
            .map((goal) => (
              <Goal
                key={goal.id}
                goal={goal.goal}
                onToggle={() => toggleGoal(goal.id)}
                isChecked={goal.isChecked}
              />
            ))}
        </div>
      </section>

      <section className={styles.goals}>
        <Heading
          align='center'
          children='Metas concluídas'
          color='black'
          level='3'
        />
        <Text
          align='center'
          children='Nossas conquistas sustentáveis: metas alcançadas'
          color='black'
        />
        <div className={styles.goals__container}>
          {goals
            .filter((goal) => goal.isChecked)
            .map((goal) => (
              <Goal
                key={goal.id}
                goal={goal.goal}
                onToggle={() => toggleGoal(goal.id)}
                isChecked={goal.isChecked}
              />
            ))}
        </div>
      </section>
    </>
  )
}
