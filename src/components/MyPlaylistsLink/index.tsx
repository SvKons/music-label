import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IMyPlaylists } from '../../redux/MyPlaylists/types';
import { Link } from 'react-router-dom';

interface MyPlaylistsLinkProps {
    data: IMyPlaylists;
}

const MyPlaylistsLink = ({ data }: MyPlaylistsLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isIconAdd = Boolean(data?.iconAdd);

    return (
        <motion.div
            className="group-playlists__item"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.2,
            }}
        >
            <div className="group-playlists__item_wrap">
                {isIconAdd && <img src={data?.imgUrl} className="group-playlists__img"></img>}
                <Link to="#" className="playlists__link">
                    {isImg && <img src={data?.iconAdd} className="group-playlists__icon"></img>}
                </Link>
                <Link to="#" className="group-playlists__name">
                    {data?.title}
                </Link>
            </div>
        </motion.div>
    );
};

export default MyPlaylistsLink;
