import React, { useEffect, useState, useMemo } from "react"; // import useMemo
//import api call axios 
import axios from "axios";

//create export component function and api call
export function HooksMemoTutorial() {
    //setdata api response setdata
    const [data, setData] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log("API call");
            setData(response.data);
        });
    }, []);

    //findlongestname api and display in browser name value
    const findLongestName = (comments) => {
        if(!comments) return null;

        //forloop name value
        let longestName = "";
        for(let i=0; i<comments.length;i++) {
            let currentName = comments[i].name; //name loop
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        //return longest name
        console.log("this was computed");
        return longestName;
    };

    //useMemo we can call function and get longestname
    const getLongestName = useMemo(() => findLongestName(data, [toggle]));
    return (
        <div className='main'>
            <div>
                {getLongestName}
            </div>
            <button onClick={() => {setToggle(!toggle);}}>{""}Toggle</button>
            {!toggle && <h1>Toggle</h1>} 
        </div>
    );
}

//create function and export method component call
function HooksUseMemo() {
    return (
        <div className='main'>
                <HooksMemoTutorial />
        </div>
    );
}

export default HooksUseMemo;