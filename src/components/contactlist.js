import React from 'react';
import ContactCard from './ContactCard';

import { Link } from 'react-router-dom';


const ContactList=(props)=>{


    

const renderContacts=props.contacts.map(contact=>{
   return ( 
       <ContactCard contact={contact} key={contact.id}/>
   );
})



    return (
        <div className="ui celled list">
            <h2>Contact List
            <Link to="/add">
                <button className="ui primary button right floated">
                    
                        Add Contact
                    
                </button>
                </Link>
            </h2>
            {renderContacts}
        </div>
    );
}


export default ContactList;