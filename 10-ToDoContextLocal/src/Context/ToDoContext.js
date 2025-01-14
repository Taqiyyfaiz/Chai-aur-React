import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Learn React",
      completd: false,
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDoContext = () => {
  // Jab bhi useContext rakloge us useContext ko Context dena padega
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
