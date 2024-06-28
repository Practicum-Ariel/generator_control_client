import React from 'react';
import MainNavigator from '../../components/MainNavigator';
import { Outlet } from 'react-router-dom';

function GenLayout() {
  const links = [
    {
      id: 1,
      title: 'דף הבית',
      href: '/',
      icon: 'home',
    },
    {
      id: 2,
      title: 'גנרטורים',
      href: '/generators',
      icon: 'gens',
    },
    {
      id: 3,
      title: 'כל הטכנאים',
      href: '/generators/tech-visits',
      icon: 'technicians',
    },
    {
      id: 4,
      title: 'טיפולים',
      href: '/generators/add-visit',
      icon: 'treatment',
    },
    {
      id: 5,
      title: 'הוספה',
      href: '/generators/new',
      icon: 'add new',
    },
    {
      id: 6,
      title: 'הוספה',
      href: '/generators/:id',
      icon: 'single',
    },
    {
      id: 7,
      title: 'תובנות',
      href: '/generators/insitights',
      icon: 'insitights',
    },
  ];
  return (
    <div className='main_layout'>
      <MainNavigator paths={links} />
      <main className='main_content'>
        <Outlet />
      </main>
    </div>
  );
}

export default GenLayout;
