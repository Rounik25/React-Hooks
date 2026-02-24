import { useEffect, useState } from "react";

export function List({ getNumber }) {
    const [item, setItem] = useState([]);
   
    
    useEffect(() => {
        setItem(getNumber);
        console.log("updating");
    }, [getNumber]);

    return (
        <>
            {item.map(i => {

                return (
                    <div key={i}>
                        <div>{i}</div>
                    </div>
                );
            })}
        </>
    );

}