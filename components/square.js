import styles from "../styles/square.module.css";

const Square = ({ i, j, handleInputChange }) => {
  const handleInputChangeHelper = (event) => {
    handleInputChange(i, j, event.target.value);
  };

  return (
    <input
      className={styles.square_input}
      maxLength={1}
      type="text"
      onChange={handleInputChangeHelper}
    ></input>
  );
};

export { Square };
