import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/appName";
import AddToDo from "./components/addToDo";
import "./app.css";
import ToDoItemsContainer from "./components/ToDoItems";
import { useState, useReducer } from "react";
import DefaultMessage from "./components/defaultMessage";
import ToDoItemsContext from "./store/toItemsStore";

const todoItemsReducer = (action) => {
  return [];
};

function App() {
  //const [toDoItems, setToDoItems] = useState([]);
  const [toDoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // setToDoItems((currVal) => [
    //   ...currVal,
    //   { name: itemName, DueDate: itemDueDate },
    // ]);
  };
  const deleteItem = (toDoItemName) => {
    const newToDoItems = toDoItems.filter((item) => item.name !== toDoItemName);
    setToDoItems(newToDoItems);
  };

  //const toDoNewItems = [{ name: "Buy Ghee", DueDate: "Today" }];
  return (
    <ToDoItemsContext.Provider
      value={{
        toDoItems: toDoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <DefaultMessage />
        <ToDoItemsContainer />
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
