import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IGenre } from '../../../redux/Genre/types';

interface IGenreLinkProps {
    data: IGenre;
}

const GenreLink = ({ data }: IGenreLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isGenre = Boolean(data?.genre);
    const isTrackCount = Boolean(data?.trackCount);

    return (
        <motion.div
            className="top-genres__block"
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.2,
            }}
            key={data.id}
        >
            <div className="top-genres__card">
                <div className="top-genres__info">
                    {isGenre && (
                        <Link to="#" className="top-genres__genre-link">
                            {data.genre}
                        </Link>
                    )}
                    {isTrackCount && <span className="top-genres__track-count">Tracks {data.trackCount}</span>}
                </div>

                {isImg && <img className="top-genres__img" src={data.imgUrl} alt={`Картинка-${data.id}`} />}
            </div>
        </motion.div>
    );
};

export default GenreLink;
