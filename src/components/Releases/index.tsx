import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import SearchFilter from '../SearchFilter';
import './Releases.scss';
import Card from '../Card';
import CardFeatured from '../CardFeatured';
import { cardList } from '../../assets/data/dataCardList';
import { releasesList } from '../../assets/data/releasesList';

const Releases = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="releases wrapper">
            <motion.div
                className="featured-song"
                ref={ref}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                    // delay: 0,
                }}
            >
                <div className="featured-song__title">Избранные песни</div>
                <div className="featured-song__group">
                    {releasesList.slice(0, 4).map(selected => {
                        return <CardFeatured key={selected.id} data={selected} />;
                    })}
                </div>
            </motion.div>

            <div className="artists-wrap">
                <div className="search">
                    <SearchForm />
                    <SearchFilter />
                </div>
                <div className="cards">
                    {cardList.slice(0, 18).map(release => {
                        return <Card key={release.id} data={release} />;
                    })}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default Releases;
