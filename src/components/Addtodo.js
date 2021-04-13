import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../js/action'
function Addtodo() {

  const dispatch =   useDispatch()
    const [text,setText] =useState("")
const  handleInput = (e) => {
    setText(e.target.value)
}

    return (
        <div>
            <form>
               <input type="text"   onChange={handleInput} />
               <button type="submit">
                 add
               </button>
            </form>
        </div>
    )
}

export default Addtodo
