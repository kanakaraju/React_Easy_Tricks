import React from "react";
import user from "../images/user.png";

const ContactDetail = (props) => {
    const {name, email} = props.contact;
    return (
      <div className="main">
        <div className='item'>
            <img className="ui avatar image" src={user} alt="user" />
        <div className='content'>
          <div className='header'>{name}</div>
        </div>
        <div className='content'>
          <div>{email}</div>
        </div>
        <div className='content'>
        <i className='trash alternate outline icon'></i>
        </div>
      </div>
      </div>
    );
};

export default ContactDetail;