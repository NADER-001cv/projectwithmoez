import React from 'react'
import { useDispatch } from 'react-redux'
import {completeTodo} from '../js/action'
function Todocard({todo}) {

    const dispatch = useDispatch()
    return (
        <div>
           
            <p  style={  todo.isDone ?{textDecoration:"line-through", opacity:"0.2"}:{}}  > {todo.text} </p>
              <button   onClick={ ()  => dispatch(completeTodo(todo.id))} >
                {
                    todo.isDone ? 'done' :'undone'
                }
              </button>
           
                  
        </div>
    )
}

export default Todocard
