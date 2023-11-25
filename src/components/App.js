import React, { Component } from 'react';
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

const keyStorage = 'phone-contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const saveContacts = window.localStorage.getItem(keyStorage);
    if (saveContacts !== null) {
      this.setState({
        contacts: JSON.parse(saveContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contact !== this.state.contacts) {
      window.localStorage.setItem(
        keyStorage,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const isNameExist = this.state.contacts.some(
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };
  visibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.visibleContacts();
    return (
      <Layout>
        <ThemeProviderWrapper />
        <Section title="Phonebook">
          <AnimationText />
          <ContactForm onAdd={this.addContact} />
          {contacts.length > 0 && (
            <>
              <SearchBar filter={filter} onSearch={this.handleFilterChange} />
              <Section title="Contacts">
                <ContactList
                  contacts={visibleContacts}
                  onDelete={this.deleteItem}
                />
              </Section>
            </>
          )}
        </Section>
        <GlobalStyle />
        <ToastContainer />
      </Layout>
    );
  }
}
