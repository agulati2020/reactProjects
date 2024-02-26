let currentDateTime = new Date();

let TimeDisplay = () => {
  return (
    <h3 className="lead">
      This is the current time: {currentDateTime.toLocaleDateString()} -{" "}
      {currentDateTime.toLocaleTimeString()}
    </h3>
  );
};
export default TimeDisplay;
