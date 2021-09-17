import React from 'react';
import user from '../images/user.jpg'
import { Link } from 'react-router-dom';
const ContactDetail=(props)=>{
    const {name,email} = props.location.state;
return(
    <div className="ui container">
        <div className="ui card centered">
        <div className="image">
            <img src={user} alt="user" />   
        </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
            
             

        </div>
        <div className="ui container center aligned">
        <Link to="/">
                    <button className="ui secondary button">
                            Back to Home
                    </button>
                </Link>
            </div>
    </div>
);
}

export default ContactDetail;

