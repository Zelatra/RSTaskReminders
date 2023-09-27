import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Pages/Profile';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import CreateReminder from './Pages/Create-reminder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Profile",
    element: <Profile />,
  },
  {
    path: "create",
    element: <CreateReminder />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

