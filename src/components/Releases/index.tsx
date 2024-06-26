import './Releases.scss';

const Releases = () => {
    return (
        <div className="releases wrapper">
            <div className="releases__wrap">
                <div className="title">Избранные песни</div>
                <div className="group">
                    <div className="item">
                        <div className="item__img">
                            <div className="item__like"></div>
                        </div>
                        <div className="item__wrap">
                            <span className="item__title">Bassline Uprising</span>
                            <span className="item__time">03:20</span>
                        </div>
                        <span className="item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="item">
                        <div className="item__img">
                            <div className="item__like"></div>
                        </div>
                        <div className="item__wrap">
                            <span className="item__title">Bassline Uprising</span>
                            <span className="item__time">03:20</span>
                        </div>
                        <span className="item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="item">
                        <div className="item__img">
                            <div className="item__like"></div>
                        </div>
                        <div className="item__wrap">
                            <span className="item__title">Bassline Uprising</span>
                            <span className="item__time">03:20</span>
                        </div>
                        <span className="item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                    <div className="item">
                        <div className="item__img">
                            <div className="item__like"></div>
                        </div>
                        <div className="item__wrap">
                            <span className="item__title">Bassline Uprising</span>
                            <span className="item__time">03:20</span>
                        </div>
                        <span className="item__author">Elysia Rayne, Jaxon Grey</span>
                    </div>
                </div>
            </div>

            <div className="artist-list">
                <div className="artist-top">
                    <form className="nav">
                        <input type="text" placeholder="Артисты, треки" className="nav__input" />
                        <button className="nav__search">
                            <i className="nav__search__icon"></i>
                        </button>
                    </form>
                    <div className="filter">
                        <ul className="filter__list list">
                            <li className="list__item">
                                <button className="list__item__btn active">Избранные</button>
                            </li>
                            <li className="list__item">
                                <button className="list__item__btn">Популярные</button>
                            </li>
                            <li className="list__item">
                                <button className="list__item__btn">Новые</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="card__img">
                            <div className="card__img__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__content__wrap">
                                <span className="card__content__title">Bassline Uprising</span>
                                <span className="card__content__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <div className="card__img__like"></div>
                        </div>
                        <div className="card__content">
                            <div className="card__content__wrap">
                                <span className="card__content__title">Bassline Uprising</span>
                                <span className="card__content__time">03:20</span>
                            </div>
                            <span className="card__author">Elysia Rayne, Jaxon Grey</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Releases;
