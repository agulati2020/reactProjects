//import { useState } from "react";
import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddToDo({ onNewItem }) {
  // const [toDoName, setToDoName] = useState("");
  // const [toDoDate, setToDoDate] = useState("");
  const toDoElement = useRef();
  const toDoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setToDoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setToDoDate(event.target.value);
  // };
  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const toDoName = toDoElement.current.value;
    const toDoDate = toDoDateElement.current.value;
    toDoElement.current.value = "";
    toDoDateElement.current.value = "";
    onNewItem(toDoName, toDoDate);
    // setToDoName("");
    // setToDoDate("");
  };
  return (
    <div className="container text-center">
      <form className="row myRow" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input type="text" placeholder="Enter To Do Here" ref={toDoElement} />
        </div>
        <div className="col-4">
          <input type="date" ref={toDoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="myBtn btn btn-success">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
