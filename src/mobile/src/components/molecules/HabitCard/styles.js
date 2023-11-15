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
})

export default styles
