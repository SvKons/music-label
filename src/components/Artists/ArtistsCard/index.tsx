import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IArtists } from '../../../redux/Artists/types';
import { Link } from 'react-router-dom';
import './ArtistsCard.scss';

interface IArtistsLinkProps {
    data: IArtists;
}

const ArtistsCard = ({ data }: IArtistsLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isAuthor = Boolean(data?.author);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.2,
            }}
        >
            <div className="artists-card">
                {isImg && (
                    <Link to="#" className="artists-card__img-wrap">
                        <img className="artists-card__img" src={data?.imgUrl} alt="Имя музыканта" />
                    </Link>
                )}
                {isAuthor && (
                    <Link to="#" className="artists-card__link">
                        {data?.author}
                    </Link>
                )}

                {isTitle && <span className="artists-card__label">{data?.title}</span>}
            </div>
        </motion.div>
    );
};

export default ArtistsCard;
