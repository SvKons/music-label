import Card from '../Card';
import MyPlaylists from './MyPlaylists';
import Playlist from './Playlist';
import { playlistsData } from './utils';
import { PlaylistSong } from './Playlist/utils';
import './Playlists.scss';
import { Link } from 'react-router-dom';

const Playlists = () => {
    return (
        <>
            <div className="playlists wrapper">
                <div className="playlists__wrap">
                    <h2 className="playlists__title">Мой Плэйлист</h2>
                    <div className="playlists__container">
                        <div className="group-playlists">
                            <div className="group-playlists__list">
                                <MyPlaylists />
                                <div className="group-playlists__item group-playlists__plus">
                                    <Link to="#" className="group-playlists__link group-playlists__link_plus">
                                        <img src={require('./img/plus.png')} className="group-playlists__icon"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="added-playlist">
                            <Playlist playlistData={PlaylistSong}>
                                <div className="added-playlist__top">
                                    <div className="added-playlist__tracks">
                                        <span className="added-playlist__name-playlist">Party Playlist</span>
                                        <span className="added-playlist__count-track">15 Треков</span>
                                    </div>

                                    <Link to="#" className="added-playlist__link">
                                        <img src={require('./img/plus.png')} className="added-playlist__icon" alt="Plus Icon" />
                                    </Link>
                                </div>
                            </Playlist>
                        </div>
                    </div>
                </div>
                <div className="playlists__played">
                    <div className="playlists__played__nav">
                        <h2 className="playlists__played__title">Недавно прослушанные</h2>
                        <div className="playlists__played__toggle">
                            <span className="playlists__played__text">Посмотреть все</span>
                            <button className="playlists__played__arrow-left"></button>
                            <button className="playlists__played__arrow-right"></button>
                        </div>
                    </div>

                    <div className="played-list">
                        {playlistsData.map(playlist => (
                            <Card
                                key={playlist.id}
                                id={''}
                                imgUrl={playlist.imgUrl}
                                url={playlist.url || '#'}
                                time={playlist.time}
                                author={playlist.author}
                                title={playlist.title}
                                className="card-song__width"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Playlists;
