import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleAddContact =  ({ name, number }) => {
      const isDuplicate = checkDuplicateContact(name);

      if (isDuplicate) {
        return alert(`${name} is already in contacts.`);
      }
      const newContact = { id: nanoid(), name, number };
      setContacts(prevContacts => [...prevContacts, newContact]);
    };

  const handleDeleteContact = contactsId => {
    setContacts(prevContacts =>
      prevContacts.filter(contacts => contacts.id !== contactsId)
    );
  };
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const checkDuplicateContact = name => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return !!existingContact;
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
