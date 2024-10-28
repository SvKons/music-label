import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IPlaylistSong } from '../../redux/Playlist/types';

interface PlaylistLinkProps {
    data: IPlaylistSong;
}

const PlaylistLink = ({ data }: PlaylistLinkProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isAuthor = Boolean(data?.author);
    const isTime = Boolean(data?.time);
    const isIconPlay = Boolean(data?.iconPlay);
    const isIconLike = Boolean(data?.iconLike);

    return (
        <motion.div
            className="added-playlist__song-item"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: 0.4,
            }}
        >
            <div className="added-playlist__title-block">
                {isImg && <img src={data?.imgUrl} alt="" />}

                <div className="added-playlist__text">
                    {isTitle && <span className="added-playlist__name-song">{data?.title}</span>}
                    {isAuthor && <span className="added-playlist__name-artist">{data?.author}</span>}
                </div>
            </div>
            <div className="added-playlist__info-block">
                {isTime && <span className="added-playlist__time-song">{data?.time}</span>}
                {isIconPlay && (
                    <button className="added-playlist__play-icon">
                        <img src={data?.iconPlay} alt="Иконка плэй" />
                    </button>
                )}
                {isIconLike && (
                    <div className="added-playlist__icon-like">
                        <img src={data?.iconLike} alt="Иконка лайка" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default PlaylistLink;
