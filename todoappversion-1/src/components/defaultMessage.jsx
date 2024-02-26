import style from "./defaultMessage.module.css";
const DefaultMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && (
      <p className={style.welComeMsg}>
        Well done you don't have anything to do
      </p>
    )
  );
};
export default DefaultMessage;
