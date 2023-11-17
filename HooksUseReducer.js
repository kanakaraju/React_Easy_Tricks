//useReducer add one hook add operations and conditions
import React, { useReducer } from "react";

//switch condition add two events and update conditions
const reducer = (state, action) => {
    switch(action.type) {
        case "Increment": //case1
            return {count: state.count + 1, showText: state.showText}
        case "toggleShowText": //case2
            return {count: state.count + 1, showText: !state.showText}
        default:
            return state
    };
}

//useReducer update conditions create variable and assign
function HooksUseReducer() {
    //increment operation and text toggle condition
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true}); 
    
    return (
        <div className='main'>
            <div>
            {state.count} 
            </div>
            <div>
            <button onClick={() => {dispatch({ type: "Increment"}); dispatch({ type: "toggleShowText"});}} className="ui button">Reducer</button>
            </div>
            <div>
            {state.showText && <h2>This is new text</h2>}
            </div>
        </div>
    );
}

export default HooksUseReducer;