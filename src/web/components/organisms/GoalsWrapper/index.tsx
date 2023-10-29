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
  getAllGoals,
  saveGoalToDatabase,
} from '@/services/controllers/user'

export interface Goal {
  _id: string
  completed: boolean
  title: string
}

export const GoalsWrapper: React.FC = () => {
  const isLocalStorageAvailable = typeof window !== 'undefined'
  const [isModalOpen, setModalOpen] = useState(false)
  const [userGoals, setUserGoals] = useState<Goal[]>([])

  let token: string | null = null
  if (isLocalStorageAvailable) {
    token = localStorage.getItem('token')
  }

  const addNewGoal = async (newGoal: {title: string}) => {
    try {
      if (token) {
        await saveGoalToDatabase(token!, newGoal)
        const updatedUserGoals = await getAllGoals(token)
        setUserGoals(updatedUserGoals)
      } 
    } catch (error) {
      console.error(
        'Erro ao adotar a meta ou obter metas atualizadas',
        error
      )
    }
  }

  useEffect(() => {
    if (token) {
      const fetchGoals = async () => {
        const userGoals = await getAllGoals(token!)
        setUserGoals(userGoals)
      }
      fetchGoals()
    }
  }, [])

  const initialGoals = [
    {
      _id: uuidv4(),
      title: 'Reduzir o desperdício de alimentos',
      isChecked: false,
    },
    {
      _id: uuidv4(),
      title: 'Diminuir o uso de plásticos descartáveis',
      isChecked: false,
    },
    {
      _id: uuidv4(),
      title: 'Economizar energia',
      isChecked: false,
    },
    {
      _id: uuidv4(),
      title: 'Priorizar o transporte sustentável',
      isChecked: false,
    },
    {
      _id: uuidv4(),
      title: 'Apoiar produtos sustentáveis e locais',
      isChecked: false,
    },
  ]

  function generateGoalId(title: string) {
    return `goal_${title.replace(/\s+/g, '_')}`;
  }

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
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
              <GoalModal onClose={handleCloseModal} addNewGoal={addNewGoal}/>
            </div>
          )}
        </div>

        <section className={styles.goals}>
          <Heading
            align='center'
            children='Metas sugeridas'
            color='black'
            level='3'
          />
          <div className={styles.goals__container}>
            {initialGoals.map((goal) => (
              <Goal
                key={goal.title}
                title={goal.title}
                isCompleted={goal.isChecked}
                id={generateGoalId(goal.title)}
                token={token!}
                setUserGoals={setUserGoals}
              />
            ))}
          </div>
        </section>

        <section className={styles.goals}>
          <Heading
            align='center'
            children='Minhas metas'
            color='black'
            level='3'
          />
          <div className={styles.goals__container}>
            {userGoals.filter((goal) => !goal.completed).map((goal) => (
                <Goal
                  key={goal.title}
                  title={goal.title}
                  isCompleted={goal.completed}
                  setUserGoals={setUserGoals}
                  token={token!}
                  id={goal._id}
                />
              ))}
          </div>
        </section>
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
          {userGoals
            .filter((goal) => goal.completed)
            .map((goal) => (
              <Goal
                key={goal.title}
                title={goal.title}
                isCompleted={goal.completed}
                setUserGoals={setUserGoals}
                token={token!}
                id={goal._id}
              />
            ))}
        </div>
      </section>
    </>
  )
}
