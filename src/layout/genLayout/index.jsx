import React from 'react';
import MainNavigator from '../../components/MainNavigator';
import { Outlet } from 'react-router-dom';

function GenLayout() {
  const links = [
    {
      id: 1,
      title: 'כל הטכנאים',
      href: '/',
      icon: <FaCogs />,
    },
  ];
  return (
    <div>
      <MainNavigator paths={links} />
      <Outlet />
    </div>
  );
}

export default GenLayout;
