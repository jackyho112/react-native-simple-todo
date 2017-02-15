import { REMOVE_TODO, ADD_TODO, UPDATE_TODOS, SET_NEW_TODO } from './actions'

const DEFAULT_STATE = {
  todos: [],
  newTodo: ''
}

const removeTodo = (state, action) => {
  const newState = {};
  const newTodos = [...state.todos];
  newTodos.splice(action.todoIndex, 1);

  Object.assign(newState, state, { todos: newTodos });
  return newState;
}

const addTodo = (state, action) => {
  const newState = {};
  const newTodos = [action.todo, ...state.todos];

  Object.assign(newState, state, { todos: newTodos, newTodo: '' });
  return newState;
}

const updateTodos = (state, action) => {
  const newState = {};

  Object.assign(newState, state, {todos: action.todos});
  return newState;
}

const setNewTodo = (state, action) => {
  const newState = {};

  Object.assign(newState, state, {newTodo: action.todo});
  return newState;
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REMOVE_TODO:
      return removeTodo(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case UPDATE_TODOS:
      return updateTodos(state, action);
    case SET_NEW_TODO:
      return setNewTodo(state, action);
    default:
      return state;
  }
}

export default rootReducer;
