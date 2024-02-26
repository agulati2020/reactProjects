import { useContext } from "react";
import ToDoItemsContext from "../store/toItemsStore";
import ToDoItem from "./toDoItem";
import Styles from "./toDoItems.module.css";

const ToDoItemsContainer = () => {
  const { toDoItems, deleteItem } = useContext(ToDoItemsContext);
  //console.log(todoItems);
  return (
    <>
      <div className={Styles.itemsContainer}>
        {toDoItems.map((item) => (
          <ToDoItem
            key={item.name}
            itemName={item.name}
            itemDate={item.DueDate}
            onDeleteClick={deleteItem}
          />
        ))}
      </div>
    </>
  );
};
export default ToDoItemsContainer;
