
import './App.css';
import {uuid} from 'uuidv4';
import AddContact from './components/addcontact';
import ContactList from './components/contactlist';
import ContactDetail from './components/ContactDetail';
import api from './api/contact'
import { useState,useEffect } from 'react';
import Header from './components/header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import DeleteContact from './components/deleteContact';
import EditContact from './components/editContact';


function App() {
  // const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts] = useState([]);



  const removeHandler= async (id)=>{
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact)=>{
        return contact.id!==id;
    });
    
    setContacts(newContacts);
  }

  const retrieveContacts=async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }


  useEffect(()=>{
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContacts) setContacts(retrieveContacts);

    const addcontacts=async ()=>{
      const data = await retrieveContacts();
      
      setContacts(data);
    }

    addcontacts();

  },[])

// useEffect(()=>{
//   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
// },[contacts]);


const EditContactHandler = async (contact)=>{
  const response = await api.put(`/contacts/${contact.id}`,contact);
  const {id,name,email} = response.data;
  setContacts(
    contacts.map(contact=>{
      return contact.id===id ? response.data :contact ;
    })
  );

}

const AddContactHandler=async (contact)=>{
  const request={
    id:uuid(),
    ...contact
  }
  const response = await api.post("/contacts",request);

  setContacts([...contacts,response.data]);
}

  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/" render={(props)=>(<ContactList {...props} contacts={contacts} getId={removeHandler}/>)} />
      <Route exact path="/add" render={(props)=>(<AddContact {...props} AddContactHandler={AddContactHandler} />)} />
      <Route exact path="/contact/:id" component={ContactDetail} />
      <Route exact path="/delete" render={(props)=>(<DeleteContact {...props} removeHandler={removeHandler}/>)} />
      <Route exact path="/edit" render={(props)=>(<EditContact {...props} EditContactHandler={EditContactHandler} />)} />

        {/* <AddContact AddContactHandler={AddContactHandler}/> */}
        
      {/* <ContactList contacts={contacts} getId={removeHandler}/> */}
      </Switch>
      </Router>
    </div>
      
  );
}

export default App;
