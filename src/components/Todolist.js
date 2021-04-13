import React from 'react'
import { useSelector } from 'react-redux'
import Todocard from './Todocard'

function Todolist() {

const todos = useSelector(state => state.todoList)
    return (
        <div>
                 {
                     todos.map(todo  => <Todocard  todo={todo}  />)                }

         
         
        </div>
    )
}

export default Todolist
