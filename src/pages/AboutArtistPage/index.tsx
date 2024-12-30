import { cardList } from '../../assets/data/dataCardList';
import { playlistSong } from '../../assets/data/dataPlaylistSongs';
import AboutAlbumArtistCard from '../../components/AboutAlbumArtistCard';
import AboutArtistCard from '../../components/AboutArtistCard';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Playlist from '../../components/Playlists/Playlist';
import SlickList from '../../components/SlickList';
import './AboutArtistPage.scss';

const AboutArtistPage = () => {
    return (
        <div>
            <Header />
            <div className="card-artist wrapper">
                <AboutArtistCard />
            </div>
            <div className="artist-top wrapper">
                <h2 className="artist-top__title">Latest Album</h2>
                <div className="artist-top__wrapper">
                    <div className="artist-top__card-artist">
                        <AboutAlbumArtistCard />
                    </div>
                    <div>
                        <Playlist playlistData={playlistSong}>
                            <></>
                        </Playlist>
                    </div>
                </div>
            </div>
            <div className="song-artist wrapper">
                <SlickList title="From The Artist" data={cardList} cardComponent={Card} visibleCount={6} />
            </div>
            <div className="featured wrapper">
                <SlickList title="Featured" data={cardList} cardComponent={Card} visibleCount={6} />
            </div>
            <Footer />
        </div>
    );
};

export default AboutArtistPage;
