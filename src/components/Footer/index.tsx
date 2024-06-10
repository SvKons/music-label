import React from "react";
import './Footer.scss';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="container">
            <div className="container__contacts">
                <Link className="container__contacts__con" to={"/contacts"}><p className="text">Контакты</p></Link>
            
            <p>E-mail</p>
            </div>
            <div className="container__data">
            <p>+7-495-204-24-50</p>
            <p>info@musiclabel.ru</p>
            </div>
            <div className="container__socials">
                <p><img src="" alt="vk" /></p>
                <p><img src="" alt="facebook" /></p>
            
            </div>
        </div>
    )
}

export default Footer;