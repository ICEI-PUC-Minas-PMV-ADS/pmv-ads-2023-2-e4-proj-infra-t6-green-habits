import { Button } from '../../atoms/Button'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { Goal } from '../../molecules/Goal'
import { Alert, Modal, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useState } from 'react'
import styles from './styles.js'

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
  {
    title: 'Priorizar o transporte sustentável',
  },
  {
    title: 'Apoiar produtos sustentáveis e locais',
  },
]

export const GoalsWrapper = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScrollView style={styles.goals}>
      <View style={styles.goals__title}>
        <Title title='Metas' />
        <GText text='Nossa rota para a sustentabilidade: suas metas no Green Habits' />
        <Button level='primary' label='Criar meta' onClick={() => setModalVisible(true)}/>
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
            <Button level='primary' label='Adicionar meta'/>
            <Button
              level='tertiary'
              label='Fechar'
              onClick={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.goals__suggested}>
        <Title title='Metas sugeridas' />

        {initialGoals.map((goal) => (
          <Goal key={goal.title} title={goal.title} />
        ))}
      </View>

      <View style={styles.goals__myGoals}>
        <Title title='Minha metas' />
        <Goal title='' />
      </View>

      <View style={styles.goals__completed}>
        <Title title='Metas concluídas' />
        <GText text='Nossas conquistas sustentáveis: metas alcançadas' />
        <Goal title='' />
      </View>

    </ScrollView>
  )
}
