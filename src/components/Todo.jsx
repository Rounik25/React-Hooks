import React from "react"
import { TODO } from "./util/TODO_obj"

export function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={{color : todo.complete? '#AAA' : '#000'}}>{todo.name}</span>
            <button onClick={() => dispatch({type : TODO.TOGGLE_ITEM, payload: {id : todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type : TODO.DELETE_ITEM, payload: {id : todo.id}})}>Delete</button> 
        </div>
    )
}