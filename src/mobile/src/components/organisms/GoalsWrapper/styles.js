import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  goals: { gap: 12, alignSelf: 'center' },
  goals__title: { gap: 12, marginBottom: 12, alignSelf: 'center' },
  goals__suggested: { gap: 12, marginBottom: 12, alignSelf: 'center' },
  goals__myGoals: { gap: 12, marginBottom: 12, alignSelf: 'center' },
  goals__completed: { gap: 12, marginBottom: 12, alignSelf: 'center' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    gap: 12,
    margin: 20,
    backgroundColor: '#FDFFFF',
    padding: 35,
  },
  textStyle: {
    color: '#242525',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: '#242525',
  },
  modal__input: {
    backgroundColor: '#FDFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#6BBD99',
    borderStyle: 'solid',
  },
})

export default styles
