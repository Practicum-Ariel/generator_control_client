import React from 'react';
import MainNavigator from '../../components/MainNavigator';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';
import { GiPowerGenerator, GiGreenPower, GiAutoRepair } from 'react-icons/gi';
import { FaCogs, FaCog } from 'react-icons/fa';
import {
  MdOutlineLogin,
  MdCrisisAlert,
  MdOutlineGeneratingTokens,
  MdAddChart,
} from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { PiUsersThreeFill } from 'react-icons/pi';

import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FiAlertTriangle } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

function MainLayout() {
  const links = [
    // {
    //   id: 1,
    //   title: 'דף הבית',
    //   href: '/',
    //   icon: <FaCogs />,
    // },
    {
      id: 2,
      title: 'All Generators',
      href: '/generators/all',
      icon: <GiPowerGenerator  />,
    },
    // {
    //   id: 3,
    //   title: 'גנרטור בודד',
    //   href: '/generator/:id',
    //   icon: <FaCog />,
    // },
    // { id: 5, title: 'התראות', href: '/notifications', icon: <MdCrisisAlert /> },
    {
      id: 6,
      title: 'Simulator',
      href: '/test/graph',
      icon: <BsGraphUpArrow />,
    },
    {
      id: 7,
      title: 'Alerts',
      href: '/',
      icon: <FiAlertTriangle />,
    },
    {
      id: 8,
      title: 'Reports',
      href: '/22',
      icon: <LuNewspaper />,
    },
    {
      id: 9,
      title: 'Settings',
      href: '/33',
      icon: <IoSettingsOutline />,
    }
    // { id: 6, title: 'התחברות', href: '/login', icon: <RiUserSettingsLine /> },
  ];
  return (
    <div className={styles.main_layout}>
      <div className={styles.side_bar}>
      <MainNavigator paths={links} />
      </div>
      <main className={styles.main_content}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
