import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './omponents/Home';
import Login from './omponents/Login';
import Register from './omponents/Register';
import AuthProviders from './providers/AuthProviders';
import Orders from './omponents/Orders';
import PrivateRoute from './routes/PrivateRoute';
import UserProfile from './omponents/UserProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, {
        path: '/register',
        element: <Register></Register>

      }, {
        path: '/orders',
        element: <PrivateRoute> <Orders></Orders></PrivateRoute>
      },{
        path:'/profile',
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
