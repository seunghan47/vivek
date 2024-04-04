import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
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
      <nav className={`${styles.nav_container} ${showNav ? undefined : styles.close}`}>
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
      <div
        className={styles.hamburger}
        onClick={toggleNav}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
