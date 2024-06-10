import React from "react";
import './News.scss';

const News = () => {
    return (
        <div className="news">
            <div className="news__item news__afisha">
                <button className="news__item__button"><h3>Концерты</h3></button>
             </div>
            <div className="news__item news__news">
                <button className="news__item__button"><h3>Новости</h3></button>
            </div>
            <div className="news__item news__relise">
                <button className="news__item__button"><h3>Релизы</h3></button>
            </div>
        </div>
    )
}

export default News;