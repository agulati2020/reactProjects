import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ itemName, itemDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row myRow">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="myBtn btn btn-danger"
            onClick={() => onDeleteClick(itemName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
