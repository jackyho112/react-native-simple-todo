import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  input: {
    flex: 0.7,
    height: 50,
    fontSize: 24
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10
  },
  todoText: {
    fontSize: 24
  }
});
