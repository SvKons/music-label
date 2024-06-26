import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrap">
                <Link to={'/'} className="header__logo">
                    <img className="header__logo__img" src={require('./img/logo.png')} width={82} alt="Logo" />
                </Link>
                <div className="header__menu">
                    <Link className="header__menu__span" to={'/about'}>
                        <span>О нас</span>
                    </Link>
                    <Link className="header__menu__span" to={'/news'}>
                        <span>Новости</span>
                    </Link>
                    <Link className="header__menu__span" to={'/news'}>
                        <span>События</span>
                    </Link>
                    <Link className="header__menu__span" to={'/artists'}>
                        <span>Артисты</span>
                    </Link>
                    <Link className="header__menu__span" to={'/tracks'}>
                        <span>Релизы</span>
                    </Link>
                    <Link className="header__menu__span" to={'/playlist'}>
                        <span>Плейлисты</span>
                    </Link>
                    <Link className="header__menu__span" to={'/about'}>
                        <span>Клипы</span>
                    </Link>
                    <Link className="header__menu__span" to={'/about'}>
                        <span>Отправить демо</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
