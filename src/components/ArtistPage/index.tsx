import Pagination from '../Pagination';
import './ArtistPage.scss';

const ArtistPage = () => {
    return (
        <>
            <div className="artists wrapper">
                <div className="top-artists__wrap">
                    <h1 className="top-artists__title">Топ Артисты</h1>
                    <div className="top-artists__cards">
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-1.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="top-artists__card__name">
                                <a href="">Mia Anderson</a>
                            </h2>
                            <p className="top-artists__card__label">Pop Artist</p>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-2.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="top-artists__card__name">
                                <a href="">Benjamin Smith</a>
                            </h2>
                            <p className="top-artists__card__label">Country Artist</p>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-3.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="top-artists__card__name">
                                <a href="">Charlotte Parker</a>
                            </h2>
                            <p className="top-artists__card__label">Rap Artist</p>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="top-artists__card__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="top-artists__card__label">Metal Artist</p>
                        </div>
                    </div>
                </div>

                <div className="artists-list__wrap">
                    <div className="search">
                        <form className="search__form">
                            <input type="text" placeholder="Артисты, треки" className="nav__input" />
                            <button className="search__form-button">
                                <i className="search__form-button__icon"></i>
                            </button>
                        </form>
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

                    <div className="artists-list">
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <h2 className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </h2>
                            <p className="artists-list__item__label">Metal Artist</p>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default ArtistPage;
