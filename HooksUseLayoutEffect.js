import React, { useLayoutEffect, useEffect, useRef } from "react";
//import axios from "axios";

function LayoutEffectTutorial() {
    const inputRef = useRef(null);

    //Render page load start before load all functions
    // We can check console value two values coming are not
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    //default value display HELLO
    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className='main'>
            <div>
                <input ref={inputRef} value="PEDRO" />
            </div>
        </div>
    );
}

export default LayoutEffectTutorial;