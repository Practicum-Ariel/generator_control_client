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
import PopupProvider from "../Popup/PopupProvider";
import ComparePage from "../../components/ComparePage";

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
      
      { path: 'generators/compare', element: <ComparePage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  { path: 'test', children: testRoutes },
];




const router = createBrowserRouter(routes);

export default function MainRoutes() {
  return (
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  );
}
