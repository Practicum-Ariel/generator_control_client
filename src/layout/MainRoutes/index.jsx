import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Example from '../../pages/Example'
import { testRoutes } from '../../test'
import MainLayout from '../MainLayout';
import AddGenerator from '../../pages/AddGenerator';
import AllGenerators from '../../pages/AllGenerators';
import LoginPage from '../../pages/LoginPage';
import Notifications from '../../pages/Notifications';
import TechnicianCheckForm from '../../pages/TechnicianCheckForm';

const routes = [
  { path: 'example', element: <Example /> },
  {
    element: <MainLayout />,
    children: [
      { path: 'all-generators', element: <AllGenerators /> },
      { path: 'add-generator', element: <AddGenerator /> },
      { path: 'single-generator', element: <AddGenerator /> },
      { path: 'tech-checkform', element: <TechnicianCheckForm /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'login-page', element: <LoginPage /> },
    ],
  },
  { path: 'test', children: testRoutes },
];



const router = createBrowserRouter(routes)

export default function MainRoutes() {

   return (<RouterProvider router={router} />)
}
