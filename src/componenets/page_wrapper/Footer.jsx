import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyrighted</p>
      <p>All Rights Reserved</p>
      <p>
        Created by{" "}
        <a
          href='http://www.paulim.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Paul Lim
        </a>
      </p>
    </div>
  );
};

export default Footer;
