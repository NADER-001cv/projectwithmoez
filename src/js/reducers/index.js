import {ADD_TODO, COMPLETE_TODO} from '../constantes'

const initialState = {
   todoList:[
       {id:1,text:'learn redux',isDone:false},
       {id:2,text:'learn node',isDone:false},
       {id:3,text:'learn react',isDone:false},

   ]

   
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case COMPLETE_TODO :
        return { ...state, todoList:state.todoList.map(todo  => todo.id === payload ?
            
            {...todo,isDone:!todo.isDone    } : todo)   }
       case ADD_TODO:
       
       return {...state,todoList:[...state.todoList,payload]}
    default:
        return state
    }
}
