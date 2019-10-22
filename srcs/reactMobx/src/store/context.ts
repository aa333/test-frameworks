import React from 'react'
import { FormStore } from '../components/Form/store';
import { TodoStore } from '../components/TodoList/store';

export const stores = React.createContext({
  form: new FormStore(),
  todo: new TodoStore()
});
