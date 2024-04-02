import React from "react";
import styles from "./Contact.module.css";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Me Today!</h1>
      <Form>
        <label htmlFor='name'></label>
        <input
          type='text'
          name=''
          id=''
        />

        <label htmlFor='email'></label>
        <input
          type='text'
          name=''
          id=''
        />

        <label htmlFor='subject'></label>
        <input
          type='text'
          name=''
          id=''
        />

        <label htmlFor='message'></label>
        <textarea
          type=''
          name=''
          id=''
        />
      </Form>
    </div>
  );
};

export default Contact;
