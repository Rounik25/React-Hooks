import "./CountButton.css";
import { useState } from "react";

export function CountButton(){
    const [count, setCount] = useState(0);
    const minus = () => {
        setCount(prevCount => prevCount-1);
    }
    const plus = () => {
        setCount(prevCount => prevCount+1);
    }
    return (
        <>
            <button className="count-button minus-button"
                onClick={minus}
            > - </button>
            <span className="display-count">{count}</span>
            <button className="count-button plus-button"
                onClick={plus}
            > + </button>
        </>
    );
}