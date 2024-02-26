import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/buttons";
import DisplayResult from "./components/displayResult";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <DisplayResult displayVal={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
