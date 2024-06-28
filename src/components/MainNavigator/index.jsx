import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import MainNavLi from '../MainNavLi';
import styles from './styles.module.css';

function MainNavigator({ paths }) {
  const [links, setLinks] = useState(paths || []);
  const [expand, setExpand] = useState(false);

  console.log(links);

  const handleExpand = () => {
    setExpand(!expand);
    console.log(expand);
  };

  return (
    <>
      <nav className={`${styles.main_nav} ${expand ? styles.expand : ''}`}>
        <div className={styles.curved_edge}></div>
        <img src='/images/logo.svg' alt='' />
        <span className={styles.burger}>
          {expand ? (
            <FaChevronRight onClick={handleExpand} />
          ) : (
            <FaChevronLeft onClick={handleExpand} />
          )}
        </span>
        <ul>
          {links &&
            links.map((li) => (
              <MainNavLi expand={expand} key={li.id} liData={li} />
            ))}
        </ul>
        <span>
          <CgProfile />
        </span>
      </nav>
    </>
  );
}

export default MainNavigator;
