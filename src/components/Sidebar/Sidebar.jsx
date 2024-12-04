import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              exact
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Properties
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/maintenance-requests"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Maintenance
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
