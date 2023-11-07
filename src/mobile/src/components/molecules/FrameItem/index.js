import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { GText } from '../../atoms/GText/index.js'
import { Title } from '../../atoms/Title/index.js'
import styles from './styles.js'

export const FrameItem = ({ frameText, frameTitle, icon }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame__container}>
        <Icon name={icon} size={30} color='#398278' />
        <Title title={frameTitle} />
      </View>

      <GText text={frameText} />
    </View>
  )
}
