import { useEffect, useState } from "react";

let TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    //console.log("Interval has been set");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      //console.log("Interval has been cleared");
    };
  });
  return (
    <h3 className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h3>
  );
};
export default TimeDisplay;
