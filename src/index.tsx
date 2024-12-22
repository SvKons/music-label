import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './reset.scss';
import './App.scss';
import Contacts from './pages/Contacts';
import ArtistsPage from './pages/ArtistsPage';
import PlaylistPage from './pages/PlaylistsPage';
import ReleasesPage from './pages/ReleasesPage';

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
        element: <ArtistsPage />,
    },
    {
        path: 'releases',
        element: <ReleasesPage />,
    },
    {
        path: 'playlists',
        element: <PlaylistPage />,
    },
]);

root.render(<RouterProvider router={routes} />);
