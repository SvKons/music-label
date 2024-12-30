import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SlickList from '../../components/SlickList';
import { cardList } from '../../assets/data/dataCardList';
import Card from '../../components/Card';
import AboutAlbumArtistCard from '../../components/AboutAlbumArtistCard';
import './AboutAlbumPage.scss';
import Playlist from '../../components/Playlists/Playlist';
import { playlistSong } from '../../assets/data/dataPlaylistSongs';

const AboutAlbumPage = () => {
    return (
        <div>
            <Header />
            <div className="album-top wrapper">
                <div className="album-top__card-artist">
                    <AboutAlbumArtistCard />
                </div>
                <div>
                    <Playlist playlistData={playlistSong}>
                        <></>
                    </Playlist>
                </div>
            </div>
            <div className="more-songs wrapper">
                <SlickList title="More From Artists" data={cardList} cardComponent={Card} visibleCount={6} />
            </div>
            <div className="recomended-artists wrapper">
                <SlickList title="Recommended" data={cardList} cardComponent={Card} visibleCount={6} />
            </div>
            <Footer />
        </div>
    );
};

export default AboutAlbumPage;
