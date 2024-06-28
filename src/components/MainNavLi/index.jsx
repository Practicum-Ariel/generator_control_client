import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function MainNavLi({ liData, expand }) {

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
        {!expand ? (
          <span
            class={`${expand ? styles.tooltip_hidden : styles.tooltip_show}`}>
            {liData.title}
          </span>
        ) : (
          ''
        )}
      </li>
    </NavLink>
  );
}

export default MainNavLi;
