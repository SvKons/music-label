import './Releases.scss';

const Releases = () => {
    return (
        <div className="releases wrapper">
            <div className="releases__wrap">
                <div className="releases__title">Избранные песни</div>
                <div className="releases__group">
                    <div className="releases__item">
                        <div className="releases__item__img">
                            <div className="releases__item__like"></div>
                        </div>
                        <div className="releases__item__wrap">
                            <span className="releases__item__title">Bassline Uprising</span>
                            <span className="releases__item__time">03:20</span>
                        </div>
                        <span className="releases__item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="releases__item">
                        <div className="releases__item__img">
                            <div className="releases__item__like"></div>
                        </div>
                        <div className="releases__item__wrap">
                            <span className="releases__item__title">Bassline Uprising</span>
                            <span className="releases__item__time">03:20</span>
                        </div>
                        <span className="releases__item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="releases__item">
                        <div className="releases__item__img">
                            <div className="releases__item__like"></div>
                        </div>
                        <div className="releases__item__wrap">
                            <span className="releases__item__title">Bassline Uprising</span>
                            <span className="releases__item__time">03:20</span>
                        </div>
                        <span className="releases__item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="releases__item">
                        <div className="releases__item__img">
                            <div className="releases__item__like"></div>
                        </div>
                        <div className="releases__item__wrap">
                            <span className="releases__item__title">Bassline Uprising</span>
                            <span className="releases__item__time">03:20</span>
                        </div>
                        <span className="releases__item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                </div>
            </div>

            <div className="artists-wrap">
                <div className="artists">
                    <form className="artists__search">
                        <input type="text" placeholder="Артисты, треки" className="nav__input" />
                        <button className="artists__search-button">
                            <i className="artists__search-button__icon"></i>
                        </button>
                    </form>
                    <div className="artists__filter">
                        <ul className="artists__filter-list">
                            <li className="artists__filter-item">
                                <button className="artists__filter-button active">Избранные</button>
                            </li>
                            <li className="artists__filter-item">
                                <button className="artists__filter-button">Популярные</button>
                            </li>
                            <li className="artists__filter-item">
                                <button className="artists__filter-button">Новые</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={require('./img/song_4.png')} alt="Девушка в наушниках" />
                            <div className="card__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__top">
                                <span className="card__song-name">Soulful Insurrection</span>
                                <span className="card__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <ul className="pagination__list">
                        <li className="pagination__item">
                            <button className="pagination__button">Prev</button>
                        </li>
                        <li className="pagination__item">
                            <button className="pagination__button pagination__button__active">1</button>
                        </li>
                        <li className="pagination__item">
                            <button className="pagination__button">2</button>
                        </li>
                        <li className="pagination__item">
                            <button className="pagination__button">3</button>
                        </li>
                        <li className="pagination__item">
                            <button className="pagination__button">Next</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Releases;
