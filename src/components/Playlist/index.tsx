import PlaylistLink from '../PlaylistLink';
import { PlaylistSong } from './utils';
import './Playlist.scss';

const Playlist = () => {
    return (
        <>
            <div className="added-playlist">
                <div className="added-playlist__wrapper">
                    <div className="added-playlist__track">
                        <div className="added-playlist__text-wrap">
                            <span className="added-playlist__name-playlist">Party Playlist</span>
                            <span className="added-playlist__count-track">15 Треков</span>
                        </div>
                        <a href="" className="added-playlist__link">
                            <img src={require('./img/plus.png')} className="added-playlist__icon"></img>
                        </a>
                    </div>
                    <div className="added-playlist__song-list">
                        {PlaylistSong.map((data, index) => {
                            return <PlaylistLink key={index} data={data} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Playlist;
