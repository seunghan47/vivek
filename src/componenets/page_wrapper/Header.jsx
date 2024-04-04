import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <NavLink to='/'>
          {" "}
          <img
            src='vivek_logo.png'
            alt="vivek's logo"
          />
        </NavLink>
      </div>
      <nav className={styles.nav_container}>
        <NavLink
          to='about'
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          About Me
        </NavLink>
        <NavLink
          to='service'
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          Service{" "}
        </NavLink>
        <NavLink
          to='contact'
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          Contact Me
        </NavLink>
        <NavLink>
          <span className={styles.book_button}>Put Me In Coach</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
