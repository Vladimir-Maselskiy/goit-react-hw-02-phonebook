import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Contacts } from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { Form } from '../Form/Form';
import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = data => {
    const { name, number } = data;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [{ name, number, id: nanoid() }, ...this.state.contacts],
    });
    return true;
  };

  handlerDeleteButton = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        React homework template
        <Form onSubmit={this.handleFormSubmit} />
        <Title>Find contacts by name</Title>
        <Filter
          value={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <Title>Contacts</Title>
        <Contacts
          contacts={this.getVisibleContacts()}
          onDelete={this.handlerDeleteButton}
        />
      </Container>
    );
  }
}
