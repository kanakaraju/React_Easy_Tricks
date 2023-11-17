import React, { useEffect } from "react";

//function component return values call in this component callback
function Child({returnComment}) {
    useEffect(() => {
        console.log("function called");
    }, [returnComment]);
    //return value component
    return (
        <div className='main'>
                {returnComment}
        </div>
    );
}

//callback child component return comment text value
export default Child;