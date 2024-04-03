import React from "react";
import styles from "./Sports.module.css";
const Sports = () => {
  return (
    <div className={styles.sports_container}>
      <div className={styles.sports_container_items}>
        <ion-icon name='basketball'></ion-icon>
        <h1>Basketball</h1>
        <p>im unstoppable</p>
        <p>no one can return my serves and volleys</p>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.sports_container_items}>
        <ion-icon name='tennisball'></ion-icon>
        <h1>Tennis</h1>
        <p>i can hit homeruns 24/7 ez</p>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.sports_container_items}>
        <ion-icon name='american-football'></ion-icon>
        <h1>Football </h1>
        <p>Traveling and Double Dribbling are my specialties </p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default Sports;
