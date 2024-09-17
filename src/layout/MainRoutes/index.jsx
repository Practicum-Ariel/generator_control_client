import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddMachine from "../../pages/AddMachine"
import AlertsAndLimitsSettings from '../../pages/AlertsAndLimitsSettings'
import UsersAndPermissionSettings from '../../pages/UsersAndPermissionSettings'
import SystemAndConfiguration from '../../pages/SystemAndConfiguration'
import ReportsSystemSettings from '../../pages/ReportsSystemSettings'
import AllGenerators from "../../pages/AllGenerators"
import Settings from '../../pages/Settings'
import Example from "../../pages/Example"
import LoginPage from "../../pages/LoginPage"
import Notifications from "../../pages/Notifications"
import SingleGenerator from "../../pages/SingleGenerator"
import TechnicianCheckForm from "../../pages/TechnicianCheckForm"
import { testRoutes } from "../../test"
import MainLayout from "../MainLayout"
import PopupProvider from "../Popup/PopupProvider"
import ComparePage from "../../components/ComparePage"
import { createContext, useState } from "react"
import WelcomePage from "../../pages/WelcomePage"
import AddTestGraph from "../../components/AddTestGraph"
import { elements } from 'chart.js'


const routes = [
  { path: 'example', element: <Example /> },
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <AllGenerators /> },
      { path: "generators", element: <AllGenerators /> },
      { path: "generator/:id", element: <SingleGenerator /> },
      { path: "tech-check/form", element: <TechnicianCheckForm /> },
      { path: "notifications", element: <Notifications /> },
      { path: "test/graph", element: <AddTestGraph /> },
      { path: 'generators/compare', element: <ComparePage /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'settings', element: <Settings />, children: [
          { index: true, element: <AddMachine /> },
          { path: 'new-machine', element: <AddMachine /> },
          { path: 'alerts-and-limit-crosser', element: <AlertsAndLimitsSettings /> },
          { path: 'users-and-permission', element: <UsersAndPermissionSettings /> },
          { path: 'system-and-configuration', element: <SystemAndConfiguration /> },
          { path: 'reports-system-settings', element: <ReportsSystemSettings /> },
        ]
      },
    ],
  },
  { path: 'test', children: testRoutes },
]

// export default function PopupProvider({}) {

const router = createBrowserRouter(routes)
export const toastify = createContext('')

export default function MainRoutes() {
  const [toshow, setToshow] = useState(true)

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
  )
}
