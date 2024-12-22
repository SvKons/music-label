import PlaylistLink from '../PlaylistLink';
import { IPlaylistSong } from '../../../redux/Playlist/types';
import './Playlist.scss';

export interface IPlaylistProps {
    playlistData: IPlaylistSong[];
    children: React.ReactNode;
}

const Playlist = ({ playlistData, children }: IPlaylistProps) => {
    return (
        <div className="added__wrapper">
            {children}
            <div className="added__song-list">
                {playlistData.map((data, index) => {
                    return <PlaylistLink key={index} data={data} />;
                })}
            </div>
        </div>
    );
};

export default Playlist;
