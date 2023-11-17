import React, {forwardRef, useImperativeHandle, useState} from "react";

//create variable and forwardref function updated toggle values checking
const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));
    return(
        <>
        <button>Button From Child</button>
        {toggle && <span>Toggle</span>}
        </>
    );
});

export default Button;