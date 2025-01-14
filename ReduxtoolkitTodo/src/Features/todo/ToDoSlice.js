/*First method is create slice*/
/*nanoid is used to generate unique id*/
import { createSlice, nanoid } from '@reduxjs/toolkit'

/*I'll keep initial state as object because inside objects it might come multiple keys and values*/
const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

export const todoSlice = createSlice({ // create slice
    name: "todo", // slice name
    initialState, // initial state
        reducers: { 
            addTodo: (state, action) => { 
                const todo = {id: nanoid(), 
                    text: action.payload
                }
                state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            /*filter method is used to remove todo*/
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
        },
        updateTodo: (state, action) => {
            /*map method is used to update todo*/
            state.todos = state.todos.map((todo) => todo.id === action.payload. id ? {...todo, todo: action.payload.todo} : todo)
        }
    }
})

/*export actions*/
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
/*export reducer*/
export default todoSlice.reducer 