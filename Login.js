//import usecontext
import React, { useContext } from "react";
//import appcontext
import {AppContext} from "./HooksContextTutorial";

function Login() {
    //setusername
    const {setUsername} = useContext(AppContext);
    
    return (
        <div className='main'>
            <div>
                <input onChange={(event) => {setUsername(event.target.value);}} />
            </div>
        </div>
    );
}

export default Login;