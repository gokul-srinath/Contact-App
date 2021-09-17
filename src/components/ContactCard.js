import React from 'react';
import user from '../images/images.jpeg'
import { Link } from 'react-router-dom';
const ContactCard=(props)=>{
    const {id,name,email} = props.contact;

    
    
return(
        <div className="item">
            
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
            <Link to={{ pathname :`/contact/${id}`,state:{name:name,email:email}}}>
                <div className="header">{name}</div>
                    <div>{email}</div>
                    </Link>
            </div>
            {/* onClick={()=>props.clickHandler(id)} */}
            <Link to={{pathname:"/delete",state:{id:id}}}>
                <i class="trash alternate outline icon right floated" style={{color:"red"}}></i>
            </Link>

            <Link to={{pathname:"/edit",state:{contact:{id:id,name:name,email:email}}}}>
                <i class="edit alternate outline icon right floated" style={{color:"blue"}}></i>
            </Link>
        </div>
);
}

export default ContactCard;