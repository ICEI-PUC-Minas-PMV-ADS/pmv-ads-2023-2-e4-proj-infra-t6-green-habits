import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: 340,
    height: 477,
    alignSelf: 'center',
  },
  card__container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 12,
    padding: 12,
  },
  card__title: {
    color: '#FDFFFF',
    marginBottom: 12,
  },
  card__description: {
    color: '#FDFFFF',
    marginBottom: 12,
  },
  card__buttons: {
    gap: 12,
    marginBottom: 12,
  },
  card__showMoreButton: {
    color: '#FDFFFF',
    alignSelf: 'center',
  },
  centeredView: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 55,
  },
  modalInput: {
    marginBottom: 12,
    marginTop: 12,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '300',
    height: 60
  },
  modalText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
})

export default styles
