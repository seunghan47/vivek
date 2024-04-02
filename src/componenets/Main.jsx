import React from "react";
import styles from "./Main.module.css";
import Button from "./Button";

const Main = () => {
  return (
    <main>
      <img
        src='hero.jpg'
        alt=''
      />
      <section className={styles.hero_text}>
        <h1>Elevate Your Game with a Multisport Champion</h1>
        <p>With a track record of success across countless sports, I'm here to lead your team to victory.</p>
        <p>Whether it's a last-minute substitution or a strategic addition to your lineup, I've got you covered.</p>
        <p>Let's dominate the game together - I'm the versatile athlete you need to secure the win!</p>
        <Button className={styles.button}>Put me in coach!</Button>
      </section>
    </main>
  );
};

export default Main;
