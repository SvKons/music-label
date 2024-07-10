import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import './Artists.scss';

const Artists = () => {
    return (
        <>
            <div className="artists wrapper">
                <div className="top-artists__wrap">
                    <h2 className="top-artists__title">Топ Артисты</h2>
                    <div className="top-artists__cards">
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-1.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="top-artists__card__name">
                                <a href="">Mia Anderson</a>
                            </span>
                            <span className="top-artists__card__label">Pop Artist</span>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-2.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="top-artists__card__name">
                                <a href="">Benjamin Smith</a>
                            </span>
                            <span className="top-artists__card__label">Country Artist</span>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-3.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="top-artists__card__name">
                                <a href="">Charlotte Parker</a>
                            </span>
                            <span className="top-artists__card__label">Rap Artist</span>
                        </div>
                        <div className="top-artists__card">
                            <a href="" className="top-artist__card__link">
                                <img className="top-artists__card__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="top-artists__card__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="top-artists__card__label">Metal Artist</span>
                        </div>
                    </div>
                </div>

                <div className="artists-list__wrap">
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

                    <div className="artists-list">
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                        <div className="artists-list__item">
                            <a href="" className="artists-list__item__link">
                                <img className="artists-list__item__image" src={require('./img/Image-4.png')} alt="Имя музыканта 1" />
                            </a>
                            <span className="artists-list__item__name">
                                <a href="">Matthew Clark</a>
                            </span>
                            <span className="artists-list__item__label">Metal Artist</span>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Artists;
