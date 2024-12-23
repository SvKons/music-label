import { motion, useInView } from 'framer-motion';
import { ICardData } from '../../redux/Card/types';
import './Card.scss';
import { useRef } from 'react';

interface ICardSongProps {
    data: ICardData;
}

const Card = ({ data }: ICardSongProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <motion.div
            className="card-song"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.2,
            }}
        >
            <div className="card-song__item">
                {isImg && (
                    <div className="card-song__img-block">
                        <img src={data?.imgUrl} alt="Фото Артиста" className="card-song__img" />
                        <div className="card-song__icon"></div>
                    </div>
                )}

                <div className="card-song__info-block">
                    <div className="card-song__info">
                        {isTitle && <span className="card-song__genre"> {data?.title}</span>}

                        {isTime && <span className="card-song__tiem">{data?.time}</span>}
                    </div>
                    {isAuthor && <span className="played-card__author">{data?.author}</span>}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
