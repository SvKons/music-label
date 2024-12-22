import { Link } from 'react-router-dom';
import './TopMenu.scss';
import Button from '../Button';

const TopMenu = () => {
    return (
        <section className="top-section">
            <div className="top-section__content wrapper">
                <div className="top-section__blocks">
                    <div className="top-section__img-wrap">
                        <img src={require('./img/dust.png')} alt="Logo Dust" className="top-section__main-img" />
                    </div>
                    <div className="top-section__info-album">
                        <h1 className="top-section__main-title">Moon Light Dust 2023</h1>
                        <div className="top-section__info-block">
                            <div className="top-section__block-content">
                                <div className="top-section__artist-img">
                                    <img src={require('./img/img-1.png')} alt="" className="top-section__img" />
                                </div>
                                <div className="top-section__artist-description">
                                    <span className="top-section__text">Artist</span>
                                    <Link to="/" className="top-section__artist-link">
                                        Monster Baby
                                    </Link>
                                </div>
                            </div>
                            <div className="top-section__block-content top-section__block-content_album">
                                <span className="top-section__text-top">Album Info</span>
                                <div className="top-section__bottom-info">
                                    <span className="top-section__count-track">15 Tracks</span>
                                    <span className="top-section__likes">2M+ Likes</span>
                                </div>
                            </div>
                        </div>
                        <span className="top-section__time-info">25 min 50 sec</span>
                        <div className="top-section__details">
                            <span className="top-section__genre">Rhythm Revolution</span>
                            <span className="top-section__date">2 Weeks ago</span>
                        </div>
                        <div className="top-section__next-info">Features: Elysia Rayne, Jaxon Grey, Harper Valencia</div>
                        <div className="top-section__buttons">
                            <Button className="top-section__btn top-section__btn_play">Play</Button>
                            <Button className="top-section__btn top-section__btn_add">Add to playlist</Button>
                            <Button className="top-section__btn top-section__btn_settings">&#65049;</Button>
                        </div>
                    </div>
                    <div className="top-section__slider"></div>
                </div>
            </div>
        </section>
    );
};

export default TopMenu;
