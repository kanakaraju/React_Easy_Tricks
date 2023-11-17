//import usestate and useeffect using api calls
import React, { useEffect, useState } from "react";
//install components api call
import axios from "axios";

function HooksUseEffect() {
    //using usestate increment values
    const [data, setData] = useState("");
    const [counter, setCounter] = useState(0);

    //api call open free api and display response and browser and check console data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log("API call");
            //response first one email
            setData(response.data[0].name);
        });
    }, []);

    //we can add function and call redirection itself
    return (
        <div className='main'>
            <div>
                Hello World {data}
            </div>
            <div>
            {counter} 
            </div>
            <div>
            <button onClick={() => {setCounter(counter + 1);}} className="ui button">Increment</button>
            </div>
        </div>
    );
}

export default HooksUseEffect;