import MyPlaylists from './MyPlaylists';
import Playlist from './Playlist';
import './Playlists.scss';

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
                                    <a href="" className="group-playlists__link group-playlists__link_plus">
                                        <img src={require('./img/plus.png')} className="group-playlists__icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Playlist />
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

                    <div className="playlists__played__list">
                        <div className="playlists__played__wrap">
                            <div className="playlists__played__toggle-wrap">
                                <div className="playlists__played__card">
                                    <div className="playlists__played__img-block">
                                        <img src={require('./img/img5.png')} alt="Фото Артиста" className="playlists__played__img" />
                                        <div className="playlists__played__icon"></div>
                                    </div>
                                    <div className="playlists__played__info-block">
                                        <div className="playlists__played__info">
                                            <span className="playlists__played__genre">Rhyme Revolution</span>
                                            <span className="playlists__played__time">03:20</span>
                                        </div>
                                        <span className="playlists__played__authot">Elysia Rayne, Jaxon Grey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playlists__played__wrap">
                            <div className="playlists__played__toggle-wrap">
                                <div className="playlists__played__card">
                                    <div className="playlists__played__img-block">
                                        <img src={require('./img/img5.png')} alt="Фото Артиста" className="playlists__played__img" />
                                        <div className="playlists__played__icon"></div>
                                    </div>
                                    <div className="playlists__played__info-block">
                                        <div className="playlists__played__info">
                                            <span className="playlists__played__genre">Rhyme Revolution</span>
                                            <span className="playlists__played__time">03:20</span>
                                        </div>
                                        <span className="playlists__played__authot">Elysia Rayne, Jaxon Grey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playlists__played__wrap">
                            <div className="playlists__played__toggle-wrap">
                                <div className="playlists__played__card">
                                    <div className="playlists__played__img-block">
                                        <img src={require('./img/img5.png')} alt="Фото Артиста" className="playlists__played__img" />
                                        <div className="playlists__played__icon"></div>
                                    </div>
                                    <div className="playlists__played__info-block">
                                        <div className="playlists__played__info">
                                            <span className="playlists__played__genre">Rhyme Revolution</span>
                                            <span className="playlists__played__time">03:20</span>
                                        </div>
                                        <span className="playlists__played__authot">Elysia Rayne, Jaxon Grey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playlists__played__wrap">
                            <div className="playlists__played__toggle-wrap">
                                <div className="playlists__played__card">
                                    <div className="playlists__played__img-block">
                                        <img src={require('./img/img5.png')} alt="Фото Артиста" className="playlists__played__img" />
                                        <div className="playlists__played__icon"></div>
                                    </div>
                                    <div className="playlists__played__info-block">
                                        <div className="playlists__played__info">
                                            <span className="playlists__played__genre">Rhyme Revolution</span>
                                            <span className="playlists__played__time">03:20</span>
                                        </div>
                                        <span className="playlists__played__authot">Elysia Rayne, Jaxon Grey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playlists__played__wrap">
                            <div className="playlists__played__toggle-wrap">
                                <div className="playlists__played__card">
                                    <div className="playlists__played__img-block">
                                        <img src={require('./img/img5.png')} alt="Фото Артиста" className="playlists__played__img" />
                                        <div className="playlists__played__icon"></div>
                                    </div>
                                    <div className="playlists__played__info-block">
                                        <div className="playlists__played__info">
                                            <span className="playlists__played__genre">Rhyme Revolution</span>
                                            <span className="playlists__played__time">03:20</span>
                                        </div>
                                        <span className="playlists__played__authot">Elysia Rayne, Jaxon Grey</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Playlists;
