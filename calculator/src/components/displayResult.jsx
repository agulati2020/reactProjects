import styles from "./displayResult.module.css";

const DisplayResult = ({ displayVal }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayVal}
      readOnly
    ></input>
  );
};
export default DisplayResult;
