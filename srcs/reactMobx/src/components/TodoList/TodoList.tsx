import React, { useCallback } from 'react';
import { observer } from 'mobx-react';

import TodoItem from './TodoItem';
import { useStores } from '../../store/hooks';

import './styles.scss';

const TodoList = observer(() => {
  const { todo } = useStores();

  const handleChange = useCallback((checked: boolean, index: number): void => {
    todo.selectTodo(checked, index);
  },[]);

  return (
    <div className="todo">
      {todo.list.map(({ name, enabled }, index) => (
        <TodoItem
          key={name}
          checked={enabled}
          label={name}
          index={index}
          onChange={handleChange}
        />
      ))}
    </div>
  );
});

export default TodoList;
