import { motion } from 'framer-motion';
import { ICardData } from '../../redux/Card/types';
import './Card.scss';

const Card = ({ imgUrl, title, time, author, className, infoBlockClassName }: ICardData) => {
    return (
        <motion.div
            className={`card-song ${className || ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.3,
            }}
        >
            <div className="card-song__item">
                <div className="card-song__img-block">
                    <img src={imgUrl} alt="Фото Артиста" className="card-song__img" />
                    <div className="card-song__icon"></div>
                </div>
                <div className={`card-song__info-block ${infoBlockClassName || ''}`}>
                    <div className="card-song__info">
                        <span className="card-song__genre">{title}</span>
                        <span className="card-song__tiem">{time}</span>
                    </div>
                    <span className="played-card__author">{author}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
