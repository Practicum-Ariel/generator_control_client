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

function MainLayout() {
  const links = [
    {
      id: 1,
      title: 'דף הבית',
      href: '/',
      icon: <FaCogs />,
    },
    {
      id: 2,
      title: 'כלל הגנרטורים',
      href: '/generators/all',
      icon: <PiUsersThreeFill />,
    },

    { id: 5, title: 'התראות', href: '/notifications', icon: <MdCrisisAlert /> },
    // { id: 6, title: 'התחברות', href: '/login', icon: <RiUserSettingsLine /> },
  ];
  return (
    <div className={styles.main_layout}>
      <MainNavigator paths={links} />
      <main className={styles.main_content}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
