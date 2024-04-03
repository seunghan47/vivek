import React from "react";
import styles from "./Contact.module.css";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Me Today!</h1>
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div>
          <label htmlFor='subject'>Subject: </label>
          <input
            type='text'
            name=''
            id=''
          />
        </div>
        <div>
          <label htmlFor='message'>Messages (Optional): </label>
          <textarea
            type=''
            name=''
            id=''
          />
        </div>
        <button className={styles.button}>Submit !</button>
      </Form>
    </div>
  );
};

export default Contact;
