import Button from 'react-bootstrap/Button';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <Button variant="dark" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
