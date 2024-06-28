import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddGenerator from '../../pages/AddGenerator';
import AllGenerators from '../../pages/AllGenerators';
import Example from '../../pages/Example';
import LoginPage from '../../pages/LoginPage';
import Notifications from '../../pages/Notifications';
import SingleGenerator from '../../pages/SingleGenerator';
import TechnicianCheckForm from '../../pages/TechnicianCheckForm';
import { testRoutes } from '../../test';
import MainLayout from '../MainLayout';
import PopupProvider from '../Popup/PopupProvider';
import ComparePage from '../../components/ComparePage';
import { createContext, useState } from 'react';
import WelcomePage from '../../pages/WelcomePage';
import TechVisit from '../../pages/TechVisit';
import GenLayout from '../GenLayout';
import TechVisitForm from '../../components/TechVisitForm';

const routes = [
  { path: 'example', element: <Example /> },
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  {
    path: 'generators',
    element: <GenLayout />,
    children: [
      { index: true, element: <AllGenerators /> },
      { index: 'tech-visits', element: <TechVisit /> }, // !! TO-DO !! ROUTER CANT FIND THE TechVisit component
      { path: 'add-visit', element: <TechVisitForm /> },
      { path: 'new', element: <AddGenerator /> },
      { path: ':id', element: <SingleGenerator /> },
      { path: 'insitights', element: <>insitights here</> },
    ],
  },
  { path: 'test', children: testRoutes },
];

const router = createBrowserRouter(routes);
export const toastify = createContext('');

export default function MainRoutes() {
  const [toshow, setToshow] = useState(true);
  return (
    <toastify.Provider
      value={{
        toshow,
        setToshow,
      }}>
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </toastify.Provider>
  );
}
