import { Link } from 'react-router-dom';
import Button from '../Button';
import './TrendingAlbum.scss';
import Playlist from '../Playlists/Playlist';
import { IPlaylistSong } from '../../redux/Playlist/types';
import { PlaylistSong } from '../Playlists/Playlist/utils';

export interface ITrendingAlbumProps {
    children: React.ReactNode;
    playlistData: IPlaylistSong[];
}

const TrendingAlbum = () => {
    return (
        <div className="trending-album">
            <Playlist playlistData={PlaylistSong}>
                <div className="trending-album__top-info">
                    <div className="trending-album__img-wrap">
                        <img src={require('./img/img-1.png')} alt="Лого альбома" className="trending-album__img" />
                    </div>
                    <div className="trending-album__info">
                        <span className="trending-album__genre">Hip Hop Hymns</span>
                        <Link to="#" className="trending-album__author">
                            Mia Anderson
                        </Link>
                        <span className="trending-album__date">2 weeks ago</span>
                        <div className="trending-album__count-info">
                            <span className="trending-album__count-tracks">15 Tracks</span>
                            <span className="trending-album__count-like">2M likes</span>
                        </div>
                        <Button className="trending-album__btn">Play</Button>
                    </div>
                </div>
            </Playlist>
        </div>
    );
};

export default TrendingAlbum;
