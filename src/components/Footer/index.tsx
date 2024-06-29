import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__background"></div>
            <div className="footer__wrap wrapper">
                <div className="footer__socials">
                    <Link to={'/'} className="footer__logo">
                        <img className="footer__logo__img" src={require('./img/logo.png')} width={82} alt="Logo" />
                    </Link>
                    <div className="footer__socials__links">
                        <Link to={'/'} className="footer__logo">
                            <img className="footer__logo__icon" src={require('./img/icon-vk.png')} alt="Лого ВКонтакте" />
                        </Link>
                        <Link to={'/'} className="footer__logo">
                            <img className="footer__logo__icon" src={require('./img/icon-vk.png')} alt="Лого ВКонтакте" />
                        </Link>
                        <Link to={'/'} className="footer__logo">
                            <img className="footer__logo__icon" src={require('./img/icon-vk.png')} alt="Лого ВКонтакте" />
                        </Link>
                    </div>
                </div>

                <div className="footer__nav">
                    <p className="footer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                    </p>
                    <div className="footer__nav-list">
                        <Link to={'/'} className="footer__nav-list__link">
                            <p>Собития</p>
                        </Link>
                        <Link to={'/'} className="footer__nav-list__link">
                            <p>Контакты</p>
                        </Link>
                        <Link to={'/'} className="footer__nav-list__link">
                            <p>О нас</p>
                        </Link>
                        <Link to={'/'} className="footer__nav-list__link">
                            <p>FAQ</p>
                        </Link>
                    </div>
                </div>
                <div className="footer__booking">
                    <span className="footer__booking__title">Доступные бронирования</span>
                    <span className="footer__booking__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <a className="footer__booking__tel" href="tel: +6221-515-1155">
                        +6221-515-1155
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
