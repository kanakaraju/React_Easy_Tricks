//import usestate
import React, { useState } from "react";

//create function, create variable and set values different ways example below
function HooksUseState() {
    const [inputValue, setInputValue] = useState("Name: ");
    const [showText, setShowText] = useState(true); //showtext new values displaying
    const [counter, setCounter] = useState(0); 
    
    //onclick increment values + 3
    const increment = () => {
        setCounter(counter + 3);
    }
    //event value get and change and set new value
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
    return (
        <div className='main'>
            <div>
            {inputValue} <input placeholder="enter value" onChange={onChange}/><br />
            </div>
            <div>
            {counter} 
            </div>
            <div>
            <button onClick={increment} className="ui button">Increment</button>
            </div>
            <div>
            <button onClick={() => {setCounter(counter + 1); setShowText(!showText);}} className="ui button">Click Here</button>
            </div>
            <div>
            {showText && <h2>This is new text</h2>}
            </div>
        </div>
    );
}

export default HooksUseState;