import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <img
          src='vivek_logo.png'
          alt="vivek's logo"
        />
      </div>
      <nav className={styles.nav_container}>
        <NavLink className={({ isActive }) => (isActive ? styles.isActive : undefined)}>About Me</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.isActive : undefined)}>Service </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.isActive : undefined)}>Contact Me</NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? styles.isActive : undefined)}>Basketball</NavLink> */}
        <NavLink>
          <span className={styles.book_button}>Put Me In Coach</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
