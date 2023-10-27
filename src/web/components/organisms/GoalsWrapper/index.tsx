'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Goal } from '@/components/molecules/Goal'
import { GoalModal } from '@/components/molecules/GoalModal'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

interface Goal {
  id: string
  goal: string
  isChecked: boolean
}

interface GoalModalProps {
  onClose: () => void
  onAddGoal: (newGoal: Goal) => void
}

export const GoalsWrapper = () => {
  localStorage.removeItem('editedGoal')
  const generateUniqueId = () => uuidv4()
  const [isModalOpen, setModalOpen] = useState(false)

  const [goals, setGoals] = useState<Goal[]>(() => {
    const storedGoals = localStorage.getItem('editedGoal')
    if (storedGoals) {
      const parsedGoals = JSON.parse(storedGoals)

      try {
        return JSON.parse(storedGoals)
      } catch (error) {
        console.error('Error parsing stored goals:', error)
      }
    }
    return [
      {
        id: generateUniqueId(),
        goal: 'Reduzir o desperdício de alimentos',
        isChecked: false,
      },
      {
        id: generateUniqueId(),
        goal: 'Diminuir o uso de plásticos descartáveis',
        isChecked: false,
      },
      {
        id: generateUniqueId(),
        goal: 'Economizar energia',
        isChecked: false,
      },
      {
        id: generateUniqueId(),
        goal: 'Priorizar o transporte sustentável',
        isChecked: false,
      },
      {
        id: generateUniqueId(),
        goal: 'Apoiar produtos sustentáveis e locais',
        isChecked: false,
      },
    ]
  })

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

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleUpdateGoal = (goalId: string, newGoal: string) => {
    try {
      if (typeof newGoal === 'string') {
        const storedGoals = localStorage.getItem('editedGoal');
        if (storedGoals) {
          const parsedGoals = JSON.parse(storedGoals);
  
          const updatedGoals = parsedGoals.map((g: { id: string }) => {
            if (g.id === goalId) {
              return { ...g, goal: newGoal };
            }
            return g;
          });
  
          localStorage.setItem('editedGoal', JSON.stringify(updatedGoals));
        }
      } else {
        console.error('Invalid goal format');
      }
    } catch (error) {
      console.error('Error updating goals in localStorage:', error);
    }
  }
   

  const addNewGoal = (newGoal: Goal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal])
    const storedGoals = localStorage.getItem('editedGoal')
    let updatedGoals: { [key: string]: Goal } = {}
    if (storedGoals) {
      try {
        updatedGoals = JSON.parse(storedGoals)
      } catch (error) {
        console.error('Error parsing stored goals:', error)
      }
    }
    updatedGoals[newGoal.id] = newGoal
    localStorage.setItem('editedGoal', JSON.stringify(updatedGoals))
  }

  useEffect(() => {
    const storedGoals = localStorage.getItem('editedGoal')
    if (storedGoals) {
      try {
        setGoals(JSON.parse(storedGoals))
      } catch (error) {
        console.error('Error parsing stored goals:', error)
      }
    }
  }, [])

  return (
    <>
      <section className={styles.goals}>
        <Heading align='center' children='Metas' color='black' level='2' />
        <div className={styles.goals__textContainer}>
          <div className={styles.goals__text}>
            <Text
              align='left'
              children='Nossa rota para a sustentabilidade: suas metas no Green Habits'
              color='black'
            />
          </div>
          <Button
            label='Criar meta'
            level='primary'
            onClick={handleOpenModal}
            className={styles.goals__button}
          />
          {isModalOpen && (
            <div className={styles.goals__modal}>
              <GoalModal onClose={handleCloseModal} />
            </div>
          )}
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
                onUpdateGoal={(newGoal) => handleUpdateGoal(goal.id, newGoal)}
                id={goal.id}
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
                onUpdateGoal={(newGoal) => handleUpdateGoal(goal.id, newGoal)}
                id={goal.id}
              />
            ))}
        </div>
      </section>
    </>
  )
}
