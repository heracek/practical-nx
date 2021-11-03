import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import { TodoListTemplate } from '../templates/TodoListTemplate';

export function TodoListPage() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <TodoListTemplate todos={state.todos} dispatch={dispatch} />;
}
