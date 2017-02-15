import Todo from './Todo';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';

export default Main = () => (<Provider store={store}><Todo /></Provider>);
