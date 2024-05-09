import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Pages/Profile';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import CreateReminder from './Pages/Create-reminder';
import MarketWatch from './Pages/Market-watch';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';



const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-e7t00c2obpzxvwvx.us.auth0.com"
    clientId="Mr3SQfFUc7EfZLxHLhb9HJkUlX0CpDTE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

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
  {
    path: "market",
    element: <MarketWatch />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

