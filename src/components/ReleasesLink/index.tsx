import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IReleases } from '../../redux/Releases/types';

interface ReleasesLinkProps {
    data: IReleases;
}

const ReleasesLink = ({ data }: ReleasesLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <motion.div
            className="card"
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.2,
            }}
        >
            <div className="releases__item">
                {isImg && (
                    <div className="releases__item__img-wrap">
                        <img className="releases__item__img" src={data?.imgUrl} alt="Фото релиза" />
                        <img className="releases__item__icon" src={data?.iconImg} alt="Иконка" />
                    </div>
                )}
                <div className="releases__item__wrap">
                    {isTitle && (
                        <a href={data?.url} className="releases__item__title">
                            {data?.title}
                        </a>
                    )}
                    {isTime && <span className="releases__item__time">{data?.time}</span>}
                </div>
                {isAuthor && <span className="releases__item__author">{data?.author}</span>}
            </div>
        </motion.div>
    );
};
export default ReleasesLink;
