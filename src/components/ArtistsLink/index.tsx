import { motion, useInView } from 'framer-motion';
import { IArtists } from '../../redux/Artists/types';
import { useRef } from 'react';

interface ArtistsLinkProps {
    data: IArtists;
}

const ArtistsLink = ({ data }: ArtistsLinkProps) => {
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
            <div className="top-artists__card">
                {isImg && (
                    <a href={data?.url} className="top-artist__card__link">
                        <img className="top-artists__card__image" src={data?.imgUrl} alt="Имя музыканта" />
                    </a>
                )}
                {isAuthor && (
                    <span className="top-artists__card__name">
                        <a href={data?.url}>{data?.author}</a>
                    </span>
                )}

                {isTitle && <span className="top-artists__card__label">{data?.title}</span>}
            </div>
        </motion.div>
    );
};

export default ArtistsLink;
