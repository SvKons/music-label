import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
import './MainPage.scss';
import TrendingAlbum from '../../components/TrendingAlbum';
import SlickList from '../../components/SlickList';
import CardFeatured from '../../components/CardFeatured';
import Card from '../../components/Card';
import TopGenres from '../../components/TopGenres';

import ArtistsCard from '../../components/Artists/ArtistsCard';
import { cardList } from '../../assets/data/dataCardList';
import { releasesList } from '../../assets/data/releasesList';
import { artistsCards } from '../../assets/data/dataArtistsCards';
import { genres } from '../../assets/data/dataGenres';

const MainPage = () => {
    return (
        <div className="main">
            <Header />
            <main className="main">
                <TopMenu />
                <section className="trending wrapper">
                    <TrendingAlbum />
                    <div className="trending__wrap">
                        <SlickList title="Weekly Trending" data={releasesList} cardComponent={CardFeatured} visibleCount={4} />
                        <SlickList title="Monthly Trending" data={releasesList} cardComponent={CardFeatured} visibleCount={4} />
                    </div>
                </section>
                <section className="recommended wrapper">
                    <SlickList title="Recommended For You" data={cardList} cardComponent={Card} visibleCount={6} />
                </section>
                <section className="main-genres wrapper">
                    <TopGenres data={genres} />
                </section>
                <section className="released wrapper">
                    <SlickList title="Recently Released" data={cardList} cardComponent={Card} visibleCount={6} />
                </section>
                <section className="featured-artists wrapper">
                    <SlickList title="Featured Artists" data={artistsCards} cardComponent={ArtistsCard} visibleCount={6} />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MainPage;
