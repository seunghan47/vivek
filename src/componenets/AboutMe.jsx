import React from "react";
import styles from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={styles.about_container}>
      <img
        src='AboutMe.jpg'
        alt='playing tennis'
      />
      <div className={styles.about_text}>
        <h1>About Me</h1>
        <p>im something somethinethinethinethinethinething</p>
        <p>what sets me apart</p>
        <p>what sets me apart</p>
        <p>what sets me apart</p>
        <p>what sets me apart</p>
        <button className={styles.button}>About Me</button>
      </div>
    </div>
  );
};

export default AboutMe;
