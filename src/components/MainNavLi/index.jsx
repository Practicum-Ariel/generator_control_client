import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function MainNavLi({ liData }) {
  console.log(liData.href);
  return (
    <NavLink
      to={liData.href}
      className={({ isActive }) =>
        isActive
          ? `${styles.main_nav_li} ${styles.active}`
          : `${styles.main_nav_li}`
      }>
      {liData.icon}

      <span class={styles.tooltiptext}>{liData.title}</span>
    </NavLink>
  );
}

export default MainNavLi;
