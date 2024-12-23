import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IReleases } from '../../redux/Releases/types';
import './CardFeatured.scss';

interface IReleasesLinkProps {
    data: IReleases;
}

const CardFeatured = ({ data }: IReleasesLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <motion.div
            className="featured-card"
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.2,
            }}
        >
            <div className="featured-card__item">
                {isImg && (
                    <div className="featured-card__img-wrap">
                        <img className="featured-card__img" src={data?.imgUrl} alt="Фото релиза" />
                        <img className="featured-card__icon" src={data?.iconImg} alt="Иконка" />
                    </div>
                )}
                <div className="featured-card__wrap">
                    {isTitle && (
                        <a href={data?.url} className="featured-card__title">
                            {data?.title}
                        </a>
                    )}
                    {isTime && <span className="featured-card__time">{data?.time}</span>}
                </div>
                {isAuthor && <span className="featured-card__author">{data?.author}</span>}
            </div>
        </motion.div>
    );
};
export default CardFeatured;
