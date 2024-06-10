import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div>Logo</div>
            <div className="header__menu">
            <Link className="header__menu__span" to={'/artists'}>
                <span>Артисты</span>
            </Link>
            <Link className="header__menu__span" to={'/products'}>
                <span>Продукты</span>
            </Link>
            <Link className="header__menu__span" to={'/live'}>
                <span>Лайв шоу</span>
            </Link>
            <Link className="header__menu__span" to={'/tracks'}>
                <span>Треки</span>
            </Link>
            <Link className="header__menu__span" to={'/credits'}>
                <span>Кредиты</span>
            </Link>
            <Link className="header__menu__span" to={'/about'}>
                <span>О нас</span>
            </Link>

            </div>
        </div>
    )
}

export default Header;