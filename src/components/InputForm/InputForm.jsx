import React from "react";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.title}
        {...props}
        // onChange={handleChange}
      />
    </div>
  );
};

export default InputForm;
