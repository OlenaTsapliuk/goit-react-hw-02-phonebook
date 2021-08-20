import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import Container from "./Components/Container";
import ContactList from "./Components/ContactList";
import shortid from "shortid";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (list) => {
    const contact = {
      ...list,
      id: shortid.generate(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}
export default App;
