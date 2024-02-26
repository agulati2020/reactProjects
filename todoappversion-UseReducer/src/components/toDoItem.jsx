import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import ToDoItemsContext from "../store/toItemsStore";

function ToDoItem({ itemName, itemDate }) {
  const { deleteItem } = useContext(ToDoItemsContext);
  return (
    <div className="container">
      <div className="row myRow">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="myBtn btn btn-danger"
            onClick={() => deleteItem(itemName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
