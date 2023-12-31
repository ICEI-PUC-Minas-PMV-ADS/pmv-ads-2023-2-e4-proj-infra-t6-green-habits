import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    textTransform: 'none',
    fontWeight: '700',
    color: '#FDFFFF',
    padding: 8,
    textAlign: 'center',
  },
  primary: {
    backgroundColor: '#398278',
  },
  secondary: {
    backgroundColor: '#242525',
  },
  tertiary: {
    backgroundColor: '#914423',
  },
  small: {
    borderRadius: 8,
    borderColor: '#FDFFFF',
    borderWidth: 1,
    alignSelf: 'flex-end',
    margin: 8,
    padding: 12
  }
})

export default styles
