import React from 'react';
import classNames from 'classnames';

import { Checkbox, InlineTextInput, SmallButton } from 'src/atoms/';
import { setTodoDone, deleteTodo, setTodoTitle } from '../reducers/todoReducer';

export function TodoListItem({ todo, dispatch }) {
  return (
    <div className="pb1">
      <div className="flex items-center bg-light-gray br2 pa1 hide-child">
        <Checkbox
          className="mh1"
          checked={todo.done}
          onChange={() => dispatch(setTodoDone(todo.id, !todo.done))}
        />

        <InlineTextInput
          className={classNames({ 'strike gray': todo.done })}
          disabled={todo.done}
          value={todo.title}
          onChange={(event) =>
            dispatch(setTodoTitle(todo.id, event.target.value))
          }
        />

        <SmallButton
          colorScheme="red"
          className="child"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </SmallButton>
      </div>
    </div>
  );
}
