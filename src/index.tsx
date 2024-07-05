import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './reset.scss';
import './App.scss';
import Contacts from './pages/Contacts';
import Artists from './pages/Artists';
import Releases from './pages/Releases';
import Playlists from './pages/Playlists';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: 'contacts',
        element: <Contacts />,
    },
    {
        path: 'artists',
        element: <Artists />,
    },
    {
        path: 'releases',
        element: <Releases />,
    },
    {
        path: 'playlists',
        element: <Playlists />,
    },
]);

root.render(<RouterProvider router={routes} />);
