//import components usestate, useeffect and useref
import React, { useState, useEffect, useRef } from "react";

//create function and set input values
function HooksUseRef() {
    const [inputValue, setInputValue] = useState(""); //state empty and set input value
    const count = useRef(0); //useRef default 0 updated
    
    //count increment value
    useEffect(() => {
      count.current = count.current + 1;
    });
    return (
        //create div and add input value and set input value
        // when i am enter input value find chracters count and display
        <div className='main'>
            <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
        </div>
    );
}

export default HooksUseRef;

