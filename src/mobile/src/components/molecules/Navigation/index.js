import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'
import React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ContactPage } from '../../../screens/Contact'
import { GoalsPage } from '../../../screens/Goals'
import { HabitsPage } from '../../../screens/Habits'
import { HomePage } from '../../../screens/Homescreen'
import { ProfilePage } from '../../../screens/Profile'

const Tab = createBottomTabNavigator()

export const ProtectedNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          activeColor='#398278'
          inactiveColor='#C4E8C2'
          style={{ backgroundColor: '#FDFFFF' }}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 })
            }

            return null
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key]
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title

            return label
          }}
        />
      )}
    >
      <Tab.Screen
        name='Home'
        component={HomePage}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='home' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Hábitos'
        component={HabitsPage}
        options={{
          tabBarLabel: 'Hábitos',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='heart' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Metas'
        component={GoalsPage}
        options={{
          tabBarLabel: 'Metas',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='trophy' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Contato'
        component={ContactPage}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='message' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={ProfilePage}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='pencil' size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
