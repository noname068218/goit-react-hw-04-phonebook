import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../Global';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { ContactForm } from './Form/Form';
import { Section } from './PhoneTitle/PhoneTitle';
import { ContactList } from './FormList/ContactList';
import { SearchBar } from './SearchBar';
import { AnimationText } from './OtherAnimation.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProviderWrapper } from './Theme';

const LOCAL_STORAGE_KEY = 'phone-contacts';

const getInitialContacts = () => {
  const saveContacts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return saveContacts !== null ? JSON.parse(saveContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(
    () =>
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = newContact => {
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      toast.error('Contact with this name already exists!');
      return;
    }

    const contact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteItem = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <ThemeProviderWrapper />
      <Section title="Phonebook">
        <AnimationText />
        <ContactForm onAdd={addContact} />
        {contacts.length > 0 && (
          <>
            <SearchBar filter={filter} onSearch={handleFilterChange} />
            <Section title="Contacts">
              <ContactList contacts={visibleContacts} onDelete={deleteItem} />
            </Section>
          </>
        )}
      </Section>

      <GlobalStyle />
      <ToastContainer />
    </Layout>
  );
};
