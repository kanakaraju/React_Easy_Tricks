import React from "react";
//include useNavigate redirection
import { useNavigate } from "react-router-dom";

function HooksUseNavigate() {
    //create variable and call
    let navigate = useNavigate();

    //create function and navigate click, onclick
    const handleClick = () => {
        navigate('/hooks');
    }
    return (
        <div className='main'>
            <button className="ui button" onClick={handleClick}>Redirection</button>
        </div>
    );
}

export default HooksUseNavigate;