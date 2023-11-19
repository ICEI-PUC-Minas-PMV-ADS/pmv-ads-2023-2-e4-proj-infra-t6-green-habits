import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { Button } from '../../atoms/Button'

import { GText } from '../../atoms/GText'
import styles from './styles.js'

export const Goal = ({ title, isCompleted, goalId, token, setUserGoals }) => {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.goal}>
      <Checkbox
        status={isCompleted ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked)
        }}
        color='#398278'
      />
      <GText
        text={title}
        color='white'
      />
      <Button level='primary' label='Editar meta' />
    </View>
  )
}
