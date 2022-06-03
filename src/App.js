import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import FromApi from './components/GetFromApi';
import { v4 as uuid } from "uuid";



function App() {

  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts(
      [...contacts, {id : uuid(), ...contact}]
      );
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const editContactHandler = (id) => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const editContact = retriveContacts.filter((contact)=>{
      return contact.id === id
    });
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts !== null) setContacts(retriveContacts);
  }, []);

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className='ui container'>
      <div className='row'>
        <div className='col' style={{marginTop:"10px"}}>
          <Header />
          <AddContact addContactHandler = {addContactHandler}/>
        </div>
        <div className='col' style={{marginTop:"40px"}}>
          <h2>List From API</h2>
          <FromApi />
        </div>
      </div>
      <ContactList contacts={contacts} getContactId={removeContactHandler} editContact={editContactHandler}/>
    </div>
  );
}

export default App;
