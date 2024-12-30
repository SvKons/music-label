import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './reset.scss';
import './App.scss';
import ArtistsPage from './pages/ArtistsPage';
import PlaylistPage from './pages/PlaylistsPage';
import ReleasesPage from './pages/ReleasesPage';
import AboutAlbumPage from './pages/AboutAlbumPage';
import AboutArtistPage from './pages/AboutArtistPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
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
    {
        path: 'about-album',
        element: <AboutAlbumPage />,
    },
    {
        path: 'about-artist',
        element: <AboutArtistPage />,
    },
]);

root.render(<RouterProvider router={routes} />);
