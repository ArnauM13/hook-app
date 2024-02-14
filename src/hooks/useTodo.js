// @ts-nocheck
import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'  

// Funció que intentarà recuperar la informació del localstorage usant el reducer
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatchToDo] = useReducer(todoReducer, [], init);

    // useEffect per guardar a localstorage. hem de fer un stringify de l'objecte.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    // Funcions per cridar als dispatch amb les accions
    const handleNewTodo = (todo) => {
        dispatchToDo({
            type: 'Add Todo',
            payload: todo
        });
    }

    const handleDeleteTodo = (id) => {
        dispatchToDo({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatchToDo({
            type: 'Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos?.length,
        pendingTodosCount: todos?.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}