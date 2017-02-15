/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from './actionCreators';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor() {
    super();

    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(id, index) {
    this.props.dispatchDeleteTodo(id, index);
  }

  componentWillMount() {
    this.props.dispatchGetTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoForm />

        <View style={styles.todos}>
          {this.props.todos.map((todo, index) => {
            return (
              <View style={styles.todo}>
                <Text
                    key={todo.id}
                    onPress={this.removeTodo.bind(null, todo.id, index)}
                    style={styles.todoText}>
                  {todo.text}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetTodos () {
      dispatch(getTodos());
    },
    dispatchDeleteTodo (id, index) {
      dispatch(deleteTodo(id, index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
