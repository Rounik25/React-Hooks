import { useReducer, useState } from "react";
import { Todo } from "./Todo";
import { TODO } from "./util/TODO_obj";



function reducer(todos, action) {
    switch (action.type) {
        case TODO.ADD_ITEM:
            return [...todos, newTodo(action.payload.name)]
        
        case TODO.TOGGLE_ITEM:
            return todos.map (todo => {
                if (todo.id === action.payload.id){
                    return {...todo, complete : !todo.complete};
                }
                return todo;
            })

        case TODO.DELETE_ITEM:
            return todos.filter(todo => todo.id!=action.payload.id);
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}


export function Todos() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: TODO.ADD_ITEM, payload: { name: name } });
        setName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={e => setName(e.target.value)}
                    value={name} />
                <div>{name}</div>
            </form>
            {todos.map(todo => {
                return(
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                );
            })}
        </div>
    );
}