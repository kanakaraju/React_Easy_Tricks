import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    console.log(props);
    return (
      <div className="container">
        <div className='item'>
            <img className="ui avatar image" src={user} alt="user" />
        <Link 
  to={`/contact/${id}`} 
  state={{ contact: props.contact }}
>
        <div className='content'>
          <div className='header'>{name}</div>
        </div>
        <div className='content'>
          <div>{email}</div>
        </div>
        </Link>
        <div className='content'>
        <i className='trash alternate outline icon' onClick={() => props.clickHandler(id)} ></i>
        </div>
      </div>
      </div>
    );
};

export default ContactCard;