import React from 'react'
import { View } from 'react-native'
import { GText } from '../../atoms/GText'
import { Title } from '../../atoms/Title'
import { FrameItem } from '../../molecules/FrameItem'
import styles from './styles.js'

export const AboutUs = () => {
  return (
    <View>
      <View style={styles.about__heading}>
        <Title style={styles.headingText} title='Sobre nós' />
        <GText
          style={styles.subHeadingText}
          text='Nosso compromisso com um mundo sustentável'
        />

        <View style={styles.about__container}>
          <FrameItem
            icon='pencil'
            frameTitle='Missão'
            frameText='Estamos empenhados em liderar a transição para um estilo de vida sustentável'
          />
          <FrameItem
            icon='tree'
            frameTitle='Inovação'
            frameText='Buscamos constantemente maneiras inovadoras de tornar os hábitos cotidianos mais ecológicos'
          />
          <FrameItem
            icon='bug'
            frameTitle='Comunidade'
            frameText='Unimos pessoas em uma comunidade, compartilhando ideias e recursos para promover um estilo de vida consciente'
          />
          <FrameItem
            icon='leaf'
            frameTitle='Transparência'
            frameText='Baseamos nossas ações na transparência para que nossas práticas sigam os mais altos padrões éticos e ambientais'
          />
        </View>
      </View>
    </View>
  )
}
