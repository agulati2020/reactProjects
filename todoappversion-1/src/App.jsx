import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/appName";
import AddToDo from "./components/addToDo";
import "./app.css";
import ToDoItemsContainer from "./components/ToDoItems";
import { useState } from "react";
import DefaultMessage from "./components/defaultMessage";

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new Item Added ${itemName} Date:${itemDueDate}`);
    setToDoItems((currVal) => [
      ...currVal,
      { name: itemName, DueDate: itemDueDate },
    ]);
  };
  const handleDeleteItem = (toDoItemName) => {
    const newToDoItems = toDoItems.filter((item) => item.name !== toDoItemName);
    setToDoItems(newToDoItems);
    //console.log(`Item Deleted ${toDoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <DefaultMessage todoItems={toDoItems} />
      <ToDoItemsContainer
        todoItems={toDoItems}
        onDeleteClick={handleDeleteItem}
      />
    </center>
  );
}

export default App;
