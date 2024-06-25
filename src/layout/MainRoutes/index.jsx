import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Example from '../../pages/Example'
import { testRoutes } from '../../test'

const routes = [
   { path: 'example', element: <Example /> },
   { path: 'test', children: testRoutes }
]

const router = createBrowserRouter(routes)

export default function MainRoutes() {

   return (<RouterProvider router={router} />)
}

