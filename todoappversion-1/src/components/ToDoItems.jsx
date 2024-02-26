import ToDoItem from "./toDoItem";
import Styles from "./toDoItems.module.css";

const ToDoItemsContainer = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={Styles.itemsContainer}>
        {todoItems.map((item) => (
          <ToDoItem
            key={item.name}
            itemName={item.name}
            itemDate={item.DueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};
export default ToDoItemsContainer;
