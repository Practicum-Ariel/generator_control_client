import React from 'react';
import MainNavigator from '../../components/MainNavigator';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className={styles.main_layout}>
      <MainNavigator />
      <Outlet />
    </div>
  );
}

export default MainLayout;
