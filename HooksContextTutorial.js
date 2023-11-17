//import createcontext
import React, { useState, createContext } from "react";
//add components login and user or example any one
import Login from "./Login";
import User from "./User";

//export context
export const AppContext = createContext(null);

function HooksContextTutorial() {
    //username value updating based on setusername
    const [username, setUsername] = useState("");

    return (
        <div className='main'>
            <AppContext.Provider value={{username, setUsername}}>
                <Login />
                <User />
            </AppContext.Provider>
        </div>
    );
}

export default HooksContextTutorial;