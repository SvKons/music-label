import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import './Releases.scss';

const ReleasesPage = () => {
    return (
        <>
            <div className="releases wrapper">
                <div className="releases__wrap">
                    <h2 className="releases__title">Избранные песни</h2>
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
                    <div className="search">
                        <SearchForm />
                        <div className="search__filter">
                            <ul className="search__filter-list">
                                <li className="search__filter-item">
                                    <button className="search__filter-button active">Избранные</button>
                                </li>
                                <li className="search__filter-item">
                                    <button className="search__filter-button">Популярные</button>
                                </li>
                                <li className="search__filter-item">
                                    <button className="search__filter-button">Новые</button>
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
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default ReleasesPage;
