import React, { useRef } from "react";
//create button component and include other component
import Button from "./Button";

function HooksImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        //parent component button
        <div className='main'>
            <div>
                <button onClick={() => { buttonRef.current.alterToggle();}}>Button From Parent</button>
                <Button ref={buttonRef} />
            </div>
        </div>
    );
}

export default HooksImperativeHandle;