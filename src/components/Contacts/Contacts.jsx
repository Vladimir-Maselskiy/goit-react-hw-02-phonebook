import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button id={contact.id} onClick={onDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
