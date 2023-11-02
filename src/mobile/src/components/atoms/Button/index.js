import { SafeAreaView, TouchableOpacity } from 'react-native'

export const Button = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}></TouchableOpacity>
    </SafeAreaView>
  )
}
