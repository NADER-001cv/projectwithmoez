import {ADD_TODO, COMPLETE_TODO} from '../constantes'


export const completeTodo = (id) => 
(

    {
    
        type:COMPLETE_TODO,
        payload: id
    }
)

export const addTodo = (newTodo) => 
(

    {
    
        type:ADD_TODO,
        payload: newTodo
    }
)