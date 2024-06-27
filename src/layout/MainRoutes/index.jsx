import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddGenerator from "../../pages/AddGenerator";
import AllGenerators from "../../pages/AllGenerators";
import Example from "../../pages/Example";
import LoginPage from "../../pages/LoginPage";
import Notifications from "../../pages/Notifications";
import SingleGenerator from "../../pages/SingleGenerator";
import TechnicianCheckForm from "../../pages/TechnicianCheckForm";
import {testRoutes} from "../../test";
import MainLayout from "../MainLayout";
import PopupProvider from "../Popup/PopupProvider";
import ComparePage from "../../components/ComparePage";
import {createContext, useState} from "react";
import WelcomePage from "../../pages/WelcomePage";
// import GenLayout from '../GenLayout';

const routes = [
  { path: 'example', element: <Example /> },
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
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

// export default function PopupProvider({}) {

const router = createBrowserRouter(routes);
export const toastify = createContext('');

export default function MainRoutes() {

  const [toshow, setToshow] = useState(true);
  return (
      <toastify.Provider
        value={{
          toshow,
          setToshow,
        }}
      >
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
      </toastify.Provider>
  );
}
