import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { getAllHabits } from '../../../services/controllers/user'
import { GText } from '../../atoms/GText'
import { HabitCard } from '../../molecules/HabitCard'
import styles from './styles.js'

export const Ranking = () => {
  const [userHabits, setUserHabits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState()

  useEffect(() => {
    const getHabits = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!token) {
        navigation.navigate('Login')
      }
      setUserToken(token)
      const updatedUserHabits = await getAllHabits(token)
      setUserHabits(updatedUserHabits)
      setIsLoading(false)
    }
    getHabits()
  }, [])

  if (isLoading) {
    return <></>
  }

  const categoryCounts = userHabits.reduce((counts, habit) => {
    const { category } = habit
    counts[category] = (counts[category] || 0) + 1
    return counts
  }, {})

  const sortedPopularCategories = Object.keys(categoryCounts).sort(
    (a, b) => categoryCounts[b] - categoryCounts[a]
  )

  const mostPopularCategories = sortedPopularCategories.slice(0, 2)

  const filteredHabits = userHabits.filter(
    (habit) => !mostPopularCategories.includes(habit.category)
  )

  const uniqueCategories = Array.from(
    new Set(filteredHabits.map((habit) => habit.category))
  )

  const sortedLeastPopularCategories = uniqueCategories.sort((a, b) => {
    const countA = categoryCounts[a] || 0
    const countB = categoryCounts[b] || 0
    return countA - countB
  })

  return (
    <View style={styles.ranking}>
      <View style={styles.ranking__container}>
        <View style={styles.ranking__textContainer}>
          <View style={styles.ranking__heading}>
            <GText text='Ranking +' color='black' />
          </View>

          <GText
            text='Estas são as categorias mais populares em seus hábitos adicionados'
            color='black'
          />
        </View>

        <View style={styles.ranking__cardsContainer}>
          {userHabits
            .filter((habit) => mostPopularCategories.includes(habit.category))
            .slice(0, 2)
            .map((habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
                isSuggestedHabit={false}
              />
            ))}
        </View>
      </View>

      <View style={styles.ranking__secondContainer}>
        <View style={styles.ranking__textContainer}>
          <View style={styles.ranking__heading}>
            <GText text='Ranking -' color='black' />
          </View>
          <GText
            text='Estas são as categorias menos adicionadas em sua lista de hábitos'
            color='black'
          />
        </View>

        <View style={styles.ranking__cardsContainer}>
          {userHabits
            .filter((habit) =>
              sortedLeastPopularCategories.includes(habit.category)
            )
            .slice(0, 2)
            .map((habit) => (
              <HabitCard
                key={habit._id}
                habitId={habit._id}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                setUserHabits={setUserHabits}
                token={userToken || ''}
                isSuggestedHabit={false}
              />
            ))}
        </View>
      </View>
    </View>
  )
}