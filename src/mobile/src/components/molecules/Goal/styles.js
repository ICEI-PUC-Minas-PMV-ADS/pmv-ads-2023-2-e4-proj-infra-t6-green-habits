import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  goal: {
    width: 340,
    minHeightheight: 200,
    backgroundColor: '#242525',
    borderCurve: 'circular',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  goal__buttons: {
    gap: 12,
    backgroundColor: 'white',
    margin: 12,
  },
  centeredView: { backgroundColor: 'white' },
  modalInput: {
    backgroundColor: 'white',
    border: 'none',
  },
})

export default styles
