import MyPlaylistsLink from '../MyPlaylistsLink';
import { MyPlaylists } from './utils';

const MyPlaylist = () => {
    return (
        <>
            {MyPlaylists.map((data, index) => {
                return <MyPlaylistsLink key={index} data={data} />;
            })}
        </>
    );
};

export default MyPlaylist;
