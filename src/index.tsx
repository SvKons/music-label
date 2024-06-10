import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage';
import './App.scss';
import './reset.scss';
import Contacts from './pages/Contacts';
import Artists from './pages/Artists';




const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "artists",
      element: <Artists />,
    },
  ]);
  

  root.render(
       <RouterProvider router={routes} />
  );