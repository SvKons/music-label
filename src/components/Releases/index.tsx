import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import ReleasesLink from '../ReleasesLink/index';
import { CardList, ReleasesList } from './utils';
import CardReleasesLink from '../CardReleasesLink';
import SearchFilter from '../SearchFilter';
import './Releases.scss';

const Releases = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="releases wrapper">
            <motion.div
                className="releases__wrap"
                ref={ref}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                    // delay: 0,
                }}
            >
                <div className="releases__title">Избранные песни</div>
                <div className="releases__group">
                    {ReleasesList.slice(0, 4).map((data, index) => {
                        return <ReleasesLink key={index} data={data} />;
                    })}
                </div>
            </motion.div>

            <div className="artists-wrap">
                <div className="search">
                    <SearchForm />
                    <SearchFilter />
                </div>
                <div className="cards">
                    {CardList.slice(0, 18).map((data, index) => {
                        return <CardReleasesLink key={index} data={data} index={0} />;
                    })}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default Releases;
