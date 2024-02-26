import { createContext } from "react";

const ToDoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

export default ToDoItemsContext;
