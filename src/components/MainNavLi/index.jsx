import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function MainNavLi({ liData, expand }) {
  console.log(liData.href);
  return (
    <NavLink
      to={liData.href}
      className={({ isActive }) =>
        isActive
          ? `${styles.main_nav_li} ${styles.active}`
          : `${styles.main_nav_li}`
      }>
      <li>
        {liData.icon}
        <div className={expand ? styles.fadeIn : ''}>
          {expand ? liData.title : ''}
        </div>

        <span className={styles.tooltiptext}>{liData.title}</span>
      </li>
    </NavLink>
  );
}

export default MainNavLi;
