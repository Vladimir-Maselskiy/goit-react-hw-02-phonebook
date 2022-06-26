import { nanoid } from 'nanoid';
import { Box, ErrorStiled, InputForm } from './Form.styled';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = { name: 'Billy', number: '1234567' };

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .number()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export function Form(props) {
  function handleFormSubmit(values, actions) {
    if (!props.onSubmit(values)) return;
    actions.resetForm();
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <InputForm>
          <label htmlFor={nameInputId}>
            Name
            <Field id={nameInputId} type="text" name="name" />
            <ErrorStiled name="name" component="div" />
          </label>
          <label htmlFor={numberInputId}>
            Number
            <Field id={numberInputId} type="tel" name="number" />
            <ErrorStiled name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
