import PropTypes from 'prop-types';
import './ContactList.scss';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className='list'>
    {contacts.map(({ id, name, number }) => (
      <li className='item' key={id}>
        <p>
          {name}: {number}
        </p>
        <button className='del-button' type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ), onDeleteContact: PropTypes.func.isRequired,
};