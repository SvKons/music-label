import { myPlaylists } from '../../../assets/data/dataMyPlaylists';
import MyPlaylistsLink from '../MyPlaylistsLink';

const MyPlaylist = () => {
    return (
        <>
            {myPlaylists.map((data, index) => {
                return <MyPlaylistsLink key={index} data={data} />;
            })}
        </>
    );
};

export default MyPlaylist;
