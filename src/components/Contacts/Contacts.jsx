import { Box } from 'components/Form/Form.styled';
import { Component } from 'react';
import { ContactsList } from './Contacts.styled';

export class Contacts extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <Box>
        <ContactsList>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button id={contact.id} onClick={onDelete}>
                Delete
              </button>
            </li>
          ))}
        </ContactsList>
      </Box>
    );
  }
}
