import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box, InputForm } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.props.onSubmit(this.state)) return;
    this.reset();
  };

  reset() {
    this.setState({
      filter: '',
      name: '',
      number: '',
    });
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Box>
        <InputForm onSubmit={this.handleFormSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleInputChange}
              required
              id={this.numberInputId}
            />
          </label>
          <button type="submit">Add Contact</button>
        </InputForm>
      </Box>
    );
  }
}
