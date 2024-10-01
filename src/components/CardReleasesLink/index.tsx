import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IReleasesCard } from '../../redux/Releases/types';

interface CardReleasesLinkProps {
    data: IReleasesCard;
    index: number;
}

const CardReleasesLink = ({ data, index }: CardReleasesLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isSongName = Boolean(data?.name);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <motion.div
            className="card"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.3,
            }}
        >
            {isImg && (
                <div className="card__img-wrap">
                    <img className="card__img" src={data?.imgUrl} alt="Фото релиза" />
                    <img className="card__like" src={data?.iconImg} />
                </div>
            )}
            <div className="card__content">
                <div className="card__top">
                    {isSongName && (
                        <a href={data?.url} className="card__song-name">
                            {data?.name}
                        </a>
                    )}
                    {isTime && <span className="card__time">{data?.time}</span>}
                </div>
                {isAuthor && <span className="card__author">{data?.author}</span>}
            </div>
        </motion.div>
    );
};

export default CardReleasesLink;
