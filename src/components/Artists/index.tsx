import { useRef } from 'react';
import Pagination from '../Pagination';
import SearchFilter from '../SearchFilter';
import SearchForm from '../SearchForm';
import './Artists.scss';
import { motion, useInView } from 'framer-motion';
import { ArtistsCard, ArtistsList } from './utils';
import ArtistsLink from '../ArtistsLink';
import ArtistsCardLink from '../ArtistsCardLink';

const Artists = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className="artists wrapper">
                <motion.div
                    className="top-artists__wrap"
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        // delay: 0,
                    }}
                >
                    <h2 className="top-artists__title">Топ Артисты</h2>
                    <div className="top-artists__cards">
                        {ArtistsList.slice(0, 4).map((data, index) => {
                            return <ArtistsLink key={index} data={data} />;
                        })}
                    </div>
                </motion.div>

                <div className="artists-list__wrap">
                    <div className="search">
                        <SearchForm />
                        <SearchFilter />
                    </div>

                    <div className="artists-list">
                        {ArtistsCard.slice(0, 18).map((data, index) => {
                            return <ArtistsCardLink key={index} data={data} index={index} />;
                        })}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Artists;
