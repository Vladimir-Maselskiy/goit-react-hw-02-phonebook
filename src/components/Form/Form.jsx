import { nanoid } from 'nanoid';
import { Box, InputForm } from './Form.styled';
import { Formik, Field } from 'formik';

export function Form(props) {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const initialValues = { name: 'Billy', number: '1234567' };

  function handleFormSubmit(values, actions) {
    props.onSubmit(values);
    actions.resetForm();
  }

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        <InputForm>
          <label htmlFor={nameInputId}>
            Name
            <Field
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={numberInputId}>
            Number
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
