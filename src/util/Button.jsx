import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, props }) => {
  return <button className={styles.book_button}>{children}</button>;
};

export default Button;
