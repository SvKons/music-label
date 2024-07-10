import './Playlist.scss';

const Playlist = () => {
    return (
        <>
            <div className="playlists wrapper">
                <div className="playlists__wrap">
                    <h2 className="playlists__title">Мой Плэйлист</h2>
                    <div className="playlists__container">
                        <div className="playlists__container__wrap">
                            <div className="playlists__list">
                                <div className="playlists__item">
                                    <div className="playlists__item__wrap">
                                        <img src={require('./img/img4.png')} className="playlists__item__img"></img>
                                        <a href="" className="playlists__link">
                                            <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                        </a>
                                        <a href="" className="playlists__item__name">
                                            Party Playlist
                                        </a>
                                    </div>
                                </div>
                                <div className="playlists__item">
                                    <div className="playlists__item__wrap">
                                        <img src={require('./img/img4.png')} className="playlists__item__img"></img>
                                        <a href="" className="playlists__link">
                                            <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                        </a>
                                        <a href="" className="playlists__item__name">
                                            Party Playlist
                                        </a>
                                    </div>
                                </div>
                                <div className="playlists__item">
                                    <div className="playlists__item__wrap">
                                        <img src={require('./img/img4.png')} className="playlists__item__img"></img>
                                        <a href="" className="playlists__link">
                                            <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                        </a>
                                        <a href="" className="playlists__item__name">
                                            Party Playlist
                                        </a>
                                    </div>
                                </div>
                                <div className="playlists__item">
                                    <div className="playlists__item__wrap">
                                        <img src={require('./img/img4.png')} className="playlists__item__img"></img>
                                        <a href="" className="playlists__link">
                                            <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                        </a>
                                        <a href="" className="playlists__item__name">
                                            Party Playlist
                                        </a>
                                    </div>
                                </div>
                                <div className="playlists__item">
                                    <div className="playlists__item__wrap">
                                        <img src={require('./img/img4.png')} className="playlists__item__img"></img>
                                        <a href="" className="playlists__link">
                                            <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                        </a>
                                        <a href="" className="playlists__item__name">
                                            Party Playlist
                                        </a>
                                    </div>
                                </div>

                                <div className="playlists__item playlists__item__plus">
                                    <a href="" className="playlists__link playlists__link__plus">
                                        <img src={require('./img/plus.png')} className="playlists__item__icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="playlists__added-list">
                            <div className="playlists__added-list__wrapper">
                                <div className="playlists__added-list__track">
                                    <div className="playlists__added-list__text-wrap">
                                        <span className="playlists__added-list__name-playlist">Party Playlist</span>
                                        <span className="playlists__added-list__count-track">15 Треков</span>
                                    </div>
                                    <a href="" className="playlists__added-list__link">
                                        <img src={require('./img/plus.png')} className="playlists__added-list__icon"></img>
                                    </a>
                                </div>
                                <div className="playlists__added-list__song-list">
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                    <div className="playlists__added-list__song-item">
                                        <div className="playlists__added-list__title-block">
                                            <img src={require('./img/song.png')} alt="" />
                                            <div className="playlists__added-list__text">
                                                <span className="playlists__added-list__name-song">Harmonic Riot</span>
                                                <span className="playlists__added-list__name-artist">Jennifer Kelly</span>
                                            </div>
                                        </div>
                                        <div className="playlists__added-list__info-block">
                                            <span className="playlists__added-list__time-song">03:20</span>
                                            <button className="playlists__added-list__play-icon"></button>
                                            <div className="playlists__added-list__icon-like"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Playlist;
