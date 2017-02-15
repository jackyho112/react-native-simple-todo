import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTodo, setNewTodo } from './actionCreators';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

class TodoForm extends Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePress() {
    this.props.dispatchPostTodo(this.props.newTodo);
  }

  handleChange(text) {
    this.props.dispatchSetNewTodo(text);
  }

  render () {
    return (
      <View style={styles.form}>
        <TextInput
          type="text"
          value={this.props.newTodo}
          onChangeText={this.handleChange}
          placeholder="new todo"
          style={styles.input}
        />

        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newTodo: state.newTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPostTodo (todo) {
      dispatch(postTodo(todo));
    },
    dispatchSetNewTodo (todo) {
      dispatch(setNewTodo(todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
