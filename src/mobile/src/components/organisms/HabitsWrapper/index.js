import { useState } from 'react'
import { Alert, Modal, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import habits from '../../../data/habits.json'
import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { HabitCard } from '../../molecules/HabitCard'
import styles from './styles.js'

export const HabitsWrapper = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
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
        {habits.slice(0, 10).map((habit, index) => (
          <HabitCard
            key={index}
            title={habit.title}
            description={habit.description}
            category={habit.category}
          />
        ))}
      </View>
      <View style={styles.cards__myHabits}>
        <Title title='Meus Hábitos' />

        <View style={styles.cards__myAddedHabits}></View>
      </View>
    </ScrollView>
  )
}
