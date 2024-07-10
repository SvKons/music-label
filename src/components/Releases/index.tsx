import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import './Releases.scss';
import ReleasesLink from '../ReleasesLink/index';
import { ReleasesList } from './utils';

const Releases = () => {
    return (
        <>
            <div className="releases wrapper">
                <div className="releases__wrap">
                    <div className="releases__title">Избранные песни</div>
                    <div className="releases__group">
                        {ReleasesList.slice(0, 4).map((data, index) => {
                            return <ReleasesLink key={index} data={data} />;
                        })}
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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
                            <div className="card__img-wrap">
                                <img className="card__img" src={require('./img/s-1.png')} />
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

export default Releases;
