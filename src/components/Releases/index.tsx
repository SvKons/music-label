import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import { сardList, releasesList } from './utils';
import SearchFilter from '../SearchFilter';
import './Releases.scss';
import Card from '../Card';

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
                    {releasesList.slice(0, 4).map(selected => {
                        return (
                            <Card
                                key={selected.id}
                                id={''}
                                imgUrl={selected.imgUrl}
                                url={selected.url}
                                title={selected.title}
                                time={selected.time}
                                author={selected.author}
                                className="card-song__width"
                            />
                        );
                    })}
                </div>
            </motion.div>

            <div className="artists-wrap">
                <div className="search">
                    <SearchForm />
                    <SearchFilter />
                </div>
                <div className="cards">
                    {сardList.slice(0, 18).map(release => {
                        return (
                            <Card
                                key={release.id}
                                id={''}
                                imgUrl={release.imgUrl}
                                url={release.url}
                                title={release.title}
                                time={release.time}
                                author={release.author}
                            />
                        );
                    })}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default Releases;
