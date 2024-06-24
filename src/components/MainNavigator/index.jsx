import React, { useState } from 'react';
import { GiPowerGenerator, GiGreenPower, GiAutoRepair } from 'react-icons/gi';
import {
  MdOutlineLogin,
  MdCrisisAlert,
  MdOutlineGeneratingTokens,
  MdAddChart,
} from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import MainNavLi from '../MainNavLi';
import styles from './styles.module.css';

function MainNavigator() {
  const [expand, setExpand] = useState(false);

  const links = [
    {
      id: 1,
      title: 'הוספת גנרטור',
      href: '/generators/all',
      icon: <GiGreenPower />,
    },
    {
      id: 2,
      title: 'כלל הגנרטורים',
      href: '/generator/new',
      icon: <GiPowerGenerator />,
    },
    {
      id: 3,
      title: 'גנרטור בודד',
      href: '/generator/:id',
      icon: <MdOutlineGeneratingTokens />,
    },
    {
      id: 4,
      title: 'טופס טכנאי',
      href: '/tech-check/form',
      icon: <GiAutoRepair />,
    },
    { id: 5, title: 'התראות', href: '/notifications', icon: <MdCrisisAlert /> },
    { id: 6, title: 'התחברות', href: '/login', icon: <MdOutlineLogin /> },
  ];

  const handleExpand = () => {
    // expand = !expand;
    setExpand(!expand);
    console.log(expand);
  };

  return (
    <>
      <nav className={`${styles.main_nav} ${expand ? styles.expand : ''}`}>
        <img src='/images/air-force-logo.svg' alt='' />
        <GiHamburgerMenu onClick={handleExpand} />
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
