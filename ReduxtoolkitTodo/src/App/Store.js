/*Step 1: you have bring configure store from toolkit */

import {configureStore} from '@reduxjs/toolkit';
import  todoReducer  from "../Features/todo/ToDoSlice";


export const store = configureStore({
    reducer: todoReducer
})


