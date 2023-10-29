'use client'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Goal } from '@/components/molecules/Goal'
import { GoalModal } from '@/components/molecules/GoalModal'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

import {
  deleteGoalById,
  getAllGoals,
  saveGoalToDatabase,
  updateGoalById,
} from '@/services/controllers/user'

interface Goal {
  id: string
  isChecked: boolean
  title: string
}

interface ResponseType {
  id: string
}

export const GoalsWrapper: React.FC = () => {
  const isLocalStorageAvailable = typeof window !== 'undefined'
  const [isModalOpen, setModalOpen] = useState(false)
  const [newGoalText, setNewGoalText] = useState('')
  const [goals, setGoals] = useState<Goal[]>([])

  let token: string | null = null

  if (isLocalStorageAvailable) {
    token = localStorage.getItem('token')
  }

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.removeItem('editedGoal')
    }

    const storedGoals = localStorage.getItem('editedGoal')
    if (storedGoals) {
      try {
        setGoals(JSON.parse(storedGoals))
      } catch (error) {
        console.error('Error parsing stored goals:', error)
      }
    } else {
      const initialGoals = [
        {
          id: uuidv4(),
          title: 'Reduzir o desperdício de alimentos',
          isChecked: false,
        },
        {
          id: uuidv4(),
          title: 'Diminuir o uso de plásticos descartáveis',
          isChecked: false,
        },
        {
          id: uuidv4(),
          title: 'Economizar energia',
          isChecked: false,
        },
        {
          id: uuidv4(),
          title: 'Priorizar o transporte sustentável',
          isChecked: false,
        },
        {
          id: uuidv4(),
          title: 'Apoiar produtos sustentáveis e locais',
          isChecked: false,
        },
      ]
      setGoals(initialGoals)
      localStorage.setItem('editedGoal', JSON.stringify(initialGoals))
    }
  }, [isLocalStorageAvailable])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const toggleGoal = (goalId: string) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, isChecked: !goal.isChecked } : goal
      )
    )
  }

  const getGoalsFromDatabase = async (token: string | undefined) => {
    try {
      const databaseGoals = await getAllGoals(token)

      const filteredGoals = databaseGoals.filter((goal: { id: string }) => {
        return !goals.some((localGoal) => localGoal.id === goal.id)
      })

      return filteredGoals
    } catch (error) {
      console.error('Erro ao buscar as metas do banco de dados', error)
      throw error
    }
  }

  const loadDatabaseGoals = async () => {
    const databaseGoals = await getGoalsFromDatabase(token || undefined)
    setGoals((prevGoals) => [...prevGoals, ...databaseGoals])
  }

  useEffect(() => {
    loadDatabaseGoals();
  }, []);

  const handleUpdateGoal = async (goalId: string, newTitle: string) => {
    if (token) {
      try {
        if (typeof newTitle === 'string') {
          await updateGoalById(goalId, token, {
            title: newTitle,
            completed: false,
          })

          setGoals((prevGoals) => {
            return prevGoals.map((goal) => {
              if (goal.id === goalId) {
                return { ...goal, title: newTitle }
              }
              return goal
            })
          })

          const storedGoals = localStorage.getItem('editedGoal')
          if (storedGoals) {
            const parsedGoals = JSON.parse(storedGoals)

            const updatedGoals = parsedGoals.map((g: { id: string }) => {
              if (g.id === goalId) {
                return { ...g, title: newTitle }
              }
              return g
            })

            localStorage.setItem('editedGoal', JSON.stringify(updatedGoals))
          }
        } else {
          console.error('Formato de objetivo inválido')
        }
      } catch (error) {
        console.error('Erro ao atualizar objetivo no banco de dados:', error)
      }
    } else {
      console.error('Token não está definido.')
    }
  }

  const addNewGoal = async (newGoal: Goal) => {
    if (token) {
      try {
        const response: ResponseType = await saveGoalToDatabase(token, newGoal)

        setGoals((prevGoals) => [...prevGoals, response as unknown as Goal])

        const storedGoals = localStorage.getItem('editedGoal')
        let updatedGoals: Record<string, ResponseType> = {}

        if (storedGoals) {
          try {
            updatedGoals = JSON.parse(storedGoals)
          } catch (error) {
            console.error('Erro ao analisar as metas armazenadas:', error)
          }

          updatedGoals[response.id] = response
          localStorage.setItem('editedGoal', JSON.stringify(updatedGoals))
        }
      } catch (error) {
        console.error('Erro ao adicionar nova meta no banco de dados:', error)
      }
    } else {
      console.error('Token não está definido.')
    }
  }

  const handleDeleteGoal = async (goalId: any) => {
    if (token) {
      if (window.confirm('Tem certeza de que deseja excluir esta meta?')) {
        try {
          await deleteGoalById(goalId, token)

          const updatedGoals = goals.filter((goal) => goal.id !== goalId)
          setGoals(updatedGoals)

          const storedGoals = localStorage.getItem('editedGoal')
          if (storedGoals) {
            const parsedGoals = JSON.parse(storedGoals)

            const updatedGoalsLocalStorage = parsedGoals.filter(
              (goal: { id: any }) => goal.id !== goalId
            )

            localStorage.setItem(
              'editedGoal',
              JSON.stringify(updatedGoalsLocalStorage)
            )
          }
        } catch (error) {
          console.error('Erro ao excluir meta do banco de dados:', error)
        }
      }
    } else {
      console.error('Token não está definido.')
    }
  }

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
              <GoalModal onClose={handleCloseModal} addNewGoal={addNewGoal} />
            </div>
          )}
        </div>

        <div className={styles.goals__container}>
          {goals
            .filter(
              (goal) => !goal.isChecked && !goal.title.startsWith('Predefinida')
            )
            .map((goal) => (
              <Goal
                key={goal.title}
                goal={goal.title}
                onToggle={() => toggleGoal(goal.id)}
                isChecked={goal.isChecked}
                onUpdateGoal={handleUpdateGoal}
                onDeleteGoal={() => handleDeleteGoal(goal.id)}
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
                key={goal.title}
                goal={goal.title}
                onToggle={() => toggleGoal(goal.id)}
                isChecked={goal.isChecked}
                onUpdateGoal={handleUpdateGoal}
                onDeleteGoal={() => handleDeleteGoal(goal.id)}
                id={goal.id}
              />
            ))}
        </div>
      </section>
    </>
  )
}
