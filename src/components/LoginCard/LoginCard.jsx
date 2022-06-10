import React from "react";
import styles from "./LoginCard.module.css";
const LoginCard = ({ title, name, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card1}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.headingName}>{title}</h1>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default LoginCard;
