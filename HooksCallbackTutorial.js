import React, { useCallback, useState } from "react"; //useCallback add and call return values
import Child from "./Child"; // Child component add

//export function call
export default function HooksCallbackTutorial() {
    //const [data, setData] = useState("pls sub");
    const data = "pls sub";
    const [toggle, setToggle] = useState(false);

    //usecallback return name value
    const returnComment = useCallback((name) => {
        return data = name;
    }, [data]);

    return (
        <div className='main'>
            <Child returnComment={returnComment} />
            
            <button onClick={() => {setToggle(!toggle);}}>{""}Toggle</button>
            {!toggle && <h1>usecallback function</h1>}
        </div>
    );
}
