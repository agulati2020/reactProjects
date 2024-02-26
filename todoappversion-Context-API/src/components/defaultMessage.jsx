import style from "./defaultMessage.module.css";
import { useContext } from "react";
import ToDoItemsContext from "../store/toItemsStore";

const DefaultMessage = () => {
  const { toDoItems } = useContext(ToDoItemsContext);
  return (
    toDoItems.length == 0 && (
      <p className={style.welComeMsg}>
        Well done you don't have anything to do
      </p>
    )
  );
};
export default DefaultMessage;
