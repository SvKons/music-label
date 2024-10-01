import { motion, useInView } from 'framer-motion';
import { IArtistsCard } from '../../redux/Artists/types';
import { useRef } from 'react';

interface ArtistsCardLinkProps {
    data: IArtistsCard;
    index: number;
}

const ArtistsCardLink = ({ data, index }: ArtistsCardLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isAuthor = Boolean(data?.author);
    const isTitle = Boolean(data?.title);

    return (
        <motion.div
            className="artists-list__item"
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
                <a href={data?.url} className="artists-list__item__link">
                    <img className="artists-list__item__image" src={data?.imgUrl} alt="Имя музыканта" />
                </a>
            )}
            {isAuthor && (
                <span className="artists-list__item__name">
                    <a href={data?.url}>{data?.author}</a>
                </span>
            )}
            {isTitle && <span className="artists-list__item__label">{data?.title}</span>}
        </motion.div>
    );
};

export default ArtistsCardLink;
