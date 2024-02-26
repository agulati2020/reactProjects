import { useState } from "react";
import { useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ToDoItemsContext from "../store/toItemsStore";

function AddToDo() {
  const { addNewItem } = useContext(ToDoItemsContext);
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");
  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };
  const handleAddButtonClick = (event) => {
    addNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row myRow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To Do Here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={toDoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="myBtn btn btn-success"
            onClick={handleAddButtonClick}
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
