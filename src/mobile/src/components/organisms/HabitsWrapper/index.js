import { useEffect, useState } from 'react'
import { Alert, Modal, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import suggestedHabits from '../../../data/habits.json'
import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { HabitCard } from '../../molecules/HabitCard'
import styles from './styles.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getAllHabits } from '../../../services/controllers/user'
import { RotatingLines } from 'react-loader-spinner'

export const HabitsWrapper = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [userHabits, setUserHabits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState()

  useEffect(() => {
    const getHabits = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login')
      }
      setUserToken(token)
      const updatedUserHabits = await getAllHabits(token)
      setUserHabits(updatedUserHabits)
      setIsLoading(false)
      console.log(updatedUserHabits)
    }
    getHabits()
  }, [])

  return !isLoading ? (
    <ScrollView style={styles.cards}>
      <View style={styles.cards__title}>
        <Title title='Hábitos' />
        <GText text='Confira nossa seleção de hábitos para o seu dia a dia' />
        <Button
          level='primary'
          label='Adicionar hábito'
          onClick={() => setModalVisible(true)}
        />
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
            <Text style={styles.modalText}>Hábito</Text>
            <TextInput
              placeholder='Plantar árvores no quintal'
              left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
              mode='outlined'
              textColor='#FDFFFF'
              outlineColor='#6BBD99'
              activeOutlineColor='#6BBD99'
              placeholderTextColor='#FDFFFF'
              style={styles.modal__input}
            />
            <Text style={styles.modalText}>Descrição</Text>
            <TextInput
              placeholder='Contribuir para a biodiversidade'
              left={<TextInput.Icon icon='pencil' color='#FDFFFF' />}
              mode='outlined'
              textColor='#FDFFFF'
              outlineColor='#6BBD99'
              activeOutlineColor='#6BBD99'
              placeholderTextColor='#FDFFFF'
              style={styles.modal__input}
            />
            <Button
              level='primary'
              label='Salvar alterações'
              onClick={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.cards__habits}>
        {userHabits.length > 0 ?
          <>
            <Title title='Meus Hábitos' />
            {userHabits.map((habit, index) => (
              <HabitCard
                key={index}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                isSuggestedHabit={false}
                habitId={habit._id}
                token={userToken}
                setUserHabits={setUserHabits}
              />
            ))}
          </>
          :
          <>
            <Title title='Hábitos sugeridos' />
            {suggestedHabits.slice(0, 3).map((habit, index) => (
              <HabitCard
                key={index}
                title={habit.title}
                description={habit.description}
                category={habit.category}
                isSuggestedHabit={true}
              />
            ))}
          </>
        }
      </View>
    </ScrollView>
  ) : <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    visible={true}
    style={styles.spinner}
  />
}
