import React from 'react';
import { Formik, Form, Field } from 'formik';
import classNames from 'classnames';

import { SmallButton, TextInput } from 'src/atoms/';

export function AddTodoForm({ onSubmit, className }) {
  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(values, actions) => {
        const { title } = values;

        onSubmit(title);
        actions.resetForm();
      }}
    >
      <Form className={classNames('flex bg-light-gray br2 pa2', className)}>
        <Field
          name="title"
          as={TextInput}
          className="br2 mr1"
          placeholder="New TODO..."
        />

        <SmallButton colorScheme="green" type="submit">
          Add
        </SmallButton>
      </Form>
    </Formik>
  );
}
