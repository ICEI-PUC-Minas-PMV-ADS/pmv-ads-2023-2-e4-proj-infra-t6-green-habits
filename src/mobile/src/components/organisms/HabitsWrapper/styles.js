import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cards: {
    alignSelf: 'center',
  },
  cards__title: { marginBottom: 12 },
  cards__habits: { gap: 12 },
  cards__myHabits: { marginTop: 12 },
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
    backgroundColor: '#242525',
    padding: 35,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'white',
  },
  modal__input: {
    backgroundColor: '#242525',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#6BBD99',
    borderStyle: 'solid',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
})

export default styles
