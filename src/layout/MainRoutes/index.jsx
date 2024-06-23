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
      { path: 'AllGenerators', element: <AllGenerators /> },
      { path: 'AddGenerator', element: <AddGenerator /> },
      { path: 'SingleGenerator', element: <AddGenerator /> },
      { path: 'TechCheckForm', element: <TechnicianCheckForm /> },
      { path: 'Notifications', element: <Notifications /> },
      { path: 'LoginPage', element: <LoginPage /> },
    ],
  },
  { path: 'test', children: testRoutes },
];



const router = createBrowserRouter(routes)

export default function MainRoutes() {

   return (<RouterProvider router={router} />)
}
