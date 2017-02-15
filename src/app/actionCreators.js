import { REMOVE_TODO, ADD_TODO, UPDATE_TODOS, SET_NEW_TODO } from './actions'

function removeTodo (todoIndex) {
  return { type: REMOVE_TODO, todoIndex };
}

function addTodo (todo) {
  return { type: ADD_TODO, todo };
}

function updateTodos (todos) {
  return { type: UPDATE_TODOS, todos};
}

export function setNewTodo (todo) {
  return { type: SET_NEW_TODO, todo };
}

export function getTodos () {
  return function (dispatch, getState) {
    fetch("http://localhost:3000/todos", { headers: { 'Content-Type': 'application/json' }})
    .then((res) => res.json())
    .then((resJson) => {
      dispatch(updateTodos(resJson));
    })
    .catch((error) => {
      alert('Cannot get todos', error);
    });
  };
}

export function postTodo (todo) {
  return function (dispatch, getState) {
    fetch(
      "http://localhost:3000/todos",
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: todo})
      }
    )
    .then((res) => res.json())
    .then(
      (resJson) => {
        dispatch(addTodo(resJson));
      },
      (res) => {
        alert('Cannot add the todo', res);
      }
    );
  };
}

export function deleteTodo (id, index) {
  return function (dispatch, getState) {
    fetch(`http://localhost:3000/todos/${id}`, { method: 'delete', accept: "application/json" })
    .then(
      (res) => {
        dispatch(removeTodo(index));
      },
      (res) => {
        alert('Cannot remove the todo', res);
      }
    );
  }
}
