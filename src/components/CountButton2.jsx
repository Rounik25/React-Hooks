import "./CountButton.css";
import { useReducer } from "react";

const reducer = ( state, action ) => {
    switch (action.type){
        case 'increment':
            return { count : state.count + 1};
        case 'decrement':
            return { count : state.count - 1};
        default :
            return state;
    }
}

export function CountButton2(){
    const [state, dispatch] = useReducer(reducer,{count : 0});
    const minus = () => {
        dispatch({type : 'decrement'});
    }
    const plus = () => {
        dispatch({type : 'increment'});
    }
    return (
        <>
            <button className="count-button minus-button"
                onClick={minus}
            > - </button>
            <span className="display-count">{state.count}</span>
            <button className="count-button plus-button"
                onClick={plus}
            > + </button>
        </>
    );
}