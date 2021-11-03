import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Heading, SmallButton } from 'src/atoms/';

import { TodoListItem } from '../molecules/';
import { AddTodoForm } from '../organisms/';
import { addTodo, deleteAllCompleted } from '../reducers/todoReducer';

export function TodoListTemplate({ todos, dispatch }) {
  return (
    <div>
      <Heading className="mb3">TODO List</Heading>

      <AddTodoForm
        className="mb3"
        onSubmit={(title) => dispatch(addTodo(title))}
      />

      <AnimatePresence initial={false}>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ scale: 0, opacity: 0, translateY: -100 }}
            animate={{ scale: 1, opacity: 1, translateY: 0, height: 'auto' }}
            exit={{ scale: 0, opacity: 0, height: 0 }}
          >
            <TodoListItem todo={todo} dispatch={dispatch} />
          </motion.div>
        ))}

        <motion.div layout className="pt2 bt b--light-gray flex justify-end">
          <SmallButton
            disabled={!todos.some((todo) => todo.done)}
            colorScheme="red"
            onClick={() => dispatch(deleteAllCompleted())}
          >
            Delete All Completed
          </SmallButton>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
