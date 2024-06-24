import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Example from '../../pages/Example'
import { testRoutes } from '../../test'
import MainLayout from '../MainLayout';
import AddGenerator from '../../pages/AddGenerator';
import AllGenerators from '../../pages/AllGenerators';
import LoginPage from '../../pages/LoginPage';
import Notifications from '../../pages/Notifications';
import TechnicianCheckForm from '../../pages/TechnicianCheckForm';
import SingleGenerator from '../../pages/SingleGenerator';

const routes = [
  { path: 'example', element: <Example /> },
  {
    element: <MainLayout />,
    children: [
      { path: 'generators/all', element: <AllGenerators /> },
      { path: 'generator/new', element: <AddGenerator /> },
      { path: 'generator/:id', element: <SingleGenerator /> },
      { path: 'tech-check/form', element: <TechnicianCheckForm /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  { path: 'test', children: testRoutes },
];



const router = createBrowserRouter(routes)

export default function MainRoutes() {

   return (<RouterProvider router={router} />)
}
