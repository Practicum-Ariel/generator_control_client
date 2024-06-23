import React from 'react';
import { GiPowerGenerator, GiGreenPower, GiAutoRepair } from 'react-icons/gi';
import {
  MdOutlineLogin,
  MdCrisisAlert,
  MdOutlineGeneratingTokens,
  MdAddChart,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import MainNavLi from '../MainNavLi';
import styles from './styles.module.css';

function MainNavigator() {
  const links = [
    {
      id: 1,
      title: 'הוספת גנרטור',
      href: '/add-Generator',
      icon: <GiGreenPower />,
    },
    {
      id: 2,
      title: 'כלל הגנרטורים',
      href: '/all-Generators',
      icon: <GiPowerGenerator />,
    },
    {
      id: 3,
      title: 'גנרטור בודד',
      href: '/single-generator',
      icon: <MdOutlineGeneratingTokens />,
    },
    {
      id: 4,
      title: 'טופס טכנאי',
      href: '/tech-checkform',
      icon: <GiAutoRepair />,
    },
    { id: 5, title: 'התראות', href: '/notifications', icon: <MdCrisisAlert /> },
    { id: 6, title: 'התחברות', href: '/login-page', icon: <MdOutlineLogin /> },
  ];

  return (
    <>
      <nav className={styles.main_nav}>
        <img src='/images/air-force-logo.svg' alt='' />
        <ul>
          {links && links.map((li) => <MainNavLi key={li.id} liData={li} />)}
        </ul>
        <span>
          <CgProfile />
        </span>
      </nav>
    </>
  );
}

export default MainNavigator;
