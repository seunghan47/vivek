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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae tristique risus. Vestibulum quis mollis
          velit, in aliquet velit. In at pretium enim. Donec a velit ac mi varius dictum. Curabitur placerat nulla et
          tellus scelerisque, vel lacinia sem molestie. Morbi a nunc volutpat, rutrum arcu non, molestie urna. Nullam
          vitae nunc vel odio semper bibendum interdum a nulla. Etiam sed magna vel lacus venenatis maximus. Maecenas
          vehicula congue sem, sodales feugiat tellus. Phasellus fermentum volutpat nulla, eu gravida neque pulvinar
          non.
        </p>
        <button className={styles.button}>About Me</button>
      </div>
    </div>
  );
};

export default AboutMe;
