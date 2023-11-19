import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { Goal } from '../../molecules/Goal'
import { Alert, Modal, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useEffect, useState } from 'react'
import styles from './styles.js'
import { getAllGoals, saveGoalToDatabase } from '../../../services/controllers/user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const initialGoals = [
  {
    title: 'Reduzir o desperdício de alimentos',
  },
  {
    title: 'Diminuir o uso de plásticos descartáveis',
  },
  {
    title: 'Economizar energia',
  },
]

export const GoalsWrapper = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userGoals, setUserGoals] = useState([])
  const [userToken, setUserToken] = useState()
  const [newGoal, setNewGoal] = useState('')
  const navigation = useNavigation()

  const addNewGoal = async (newGoal) => {
    try {
      if (userToken) {
        await saveGoalToDatabase(userToken, {title: newGoal})

        const updatedUserGoals = await getAllGoals(userToken)
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
    const getGoals = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login')
      }
      setUserToken(token)
      const updatedUserGoals = await getAllGoals(token)
      setUserGoals(updatedUserGoals)
      setIsLoading(false)
    }
    getGoals()
  }, [])

  return isLoading ?
    <View style={styles.loadingMessage}>
      <Text style={{ textAlign: 'center' }}>Carregando...</Text>
    </View> : (
      <ScrollView style={styles.goals}>
        <View style={styles.goals__title}>
          <Title title='Metas' />
          <GText text='Nossa rota para a sustentabilidade: suas metas no Green Habits' />
          <Button level='primary' label='Criar meta' onClick={() => setModalVisible(true)} />
        </View>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal fechado')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Qual a sua meta?</Text>
              <TextInput
                placeholder='Reciclar uma vez ao mês'
                left={<TextInput.Icon icon='pencil' color='#242525' />}
                mode='outlined'
                textColor='#242525'
                outlineColor='#6BBD99'
                activeOutlineColor='#6BBD99'
                placeholderTextColor='#242525'
                style={styles.modal__input}
                onChangeText={(text) => {
                  setNewGoal(text)
                }}
              />
              <Button level='primary'
                label='Adicionar meta'
                onClick={async () => {
                  await addNewGoal(newGoal)
                  setModalVisible(!modalVisible)
                }}  
              />
              <Button
                level='tertiary'
                label='Fechar'
                onClick={async () => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.goals__myGoals}>
          {userGoals.length > 0 ?
            <>
              <Title title='Minha metas' />
              {userGoals.filter((goal) => !goal.completed).map((goal, index) => (
                <Goal
                  key={index}
                  title={goal.title}
                  goalId={goal._id}
                  token={userToken}
                  setUserGoals={setUserGoals}
                />
              ))}
              <Title title='Metas concluídas' />
              <GText text='Nossas conquistas sustentáveis: metas alcançadas' />
              {userGoals.filter((goal) => goal.completed).map((goal, index) => (
                <Goal 
                  key={index} 
                  title={goal.title}
                  isCompleted={true}
                  goalId={goal._id}
                  token={userToken}
                  setUserGoals={setUserGoals}
                />
              ))}
            </>
            :
            <>
              <Title title='Metas sugeridas' />
              {initialGoals.map((goal) => (
                <Goal key={goal.title} title={goal.title} />
              ))}
            </>}
        </View>
      </ScrollView>
    )
}
