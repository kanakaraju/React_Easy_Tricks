import React, {useContext} from "react";
import {AppContext} from "./HooksContextTutorial";

//user method create and return value
function User() {
    const {username} = useContext(AppContext);

    return (
        <div className='main'>
            <div>
                <h2>User: {username}</h2>
            </div>
        </div>
    );
}

export default User;