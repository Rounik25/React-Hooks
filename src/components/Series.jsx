import { useState, useCallback } from "react";
import { List } from "./List";

export function Series() {
    const [ theme, setTheme ] = useState(false);
    const [number, setNumber] = useState(0);
    
    const getNumber = useCallback(() => {
        return [ number, number+1, number+2 ]
    },[number])

    const styles = {
        background : theme ? 'black' : 'white',
        color : theme ? 'white' : 'black',
        width : '200px'
    }
    

    return (
        <div style={styles}>
            <div>   
                <input style={styles} type="number" onChange={e => {e.target.value !=='' ? setNumber(parseInt(e.target.value)) : setNumber(0)}} value={number} />
            </div>    
            <button onClick={()=> setTheme(prevTheme=>!prevTheme)} >Toggle Theme</button>
            <List getNumber={getNumber}/>
        </div>
    );
} 