import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  goal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    minHeight: 10,
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  goalInput: {
    position: 'absolute',
    height: 0,
    width: 0,
  },
  goalCheck: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 20,
    backgroundColor: 'transparent',
    opacity: 1,
    margin: 4,
  },
  goalChecked: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  goalContainer: {
    flex: 1,
  },
  goalText: {
    marginLeft: 60,
    lineHeight: 40,
    color: 'white',
    textDecorationLine: 'none',
    fontWeight: '500',
    fontSize: 14,
  },
  goalButton: {
    width: 60,
    height: 60,
  },
  goalEditing: {
    ...StyleSheet.flatten([
      styles.goalContainer,
      styles.goalText,
      { width: '100%' },
    ]),
  },
});

export default styles;
