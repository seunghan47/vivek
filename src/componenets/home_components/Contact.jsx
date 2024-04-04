import React from "react";
import styles from "./Contact.module.css";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Me Today!</h1>
      <Form>
        <div className={styles.contact_items}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div className={styles.contact_items}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div className={styles.contact_items}>
          <label htmlFor='subject'>Subject: </label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div className={styles.contact_items}>
          <label htmlFor='message'>Your Messages (Optional): </label>
          <textarea
            type=''
            name=''
            id=''
          />
        </div>
        <button className={styles.button}>Submit</button>
      </Form>
    </div>
  );
};

export default Contact;
