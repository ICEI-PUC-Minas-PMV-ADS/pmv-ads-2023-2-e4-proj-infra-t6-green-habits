import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { Goal } from '../../molecules/Goal'
import { Alert, Modal, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './styles.js'
import { getAllGoals } from '../../../services/controllers/user'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
              />
              <Button level='primary' label='Adicionar meta' />
              <Button
                level='tertiary'
                label='Fechar'
                onClick={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.goals__myGoals}>
          {userGoals.length > 0
            ?
            <>
              <View style={styles.goals__myGoals}>
                <Title title='Minha metas' />
                <Goal title='' />
              </View>
              <View style={styles.goals__completed}>
                <Title title='Metas concluídas' />
                <GText text='Nossas conquistas sustentáveis: metas alcançadas' />
                <Goal title='' />
              </View>
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
