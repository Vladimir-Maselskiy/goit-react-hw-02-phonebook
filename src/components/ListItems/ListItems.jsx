import PropTypes from 'prop-types';
import { ListItem } from './ListItems.styled';

export default function ListItems(props) {
  const { contacts, onDelete } = props;
  return (
    <>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name} {contact.number}
          <button id={contact.id} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </>
  );
}

ListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
