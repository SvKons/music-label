import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
import './MainPage.scss';
import TrendingAlbum from '../../components/TrendingAlbum';
import SlickList from '../../components/SlickList';
import { cardList, releasesList } from './utils';
import CardFeatured from '../../components/CardFeatured';
import Card from '../../components/Card';

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
            </main>

            <Footer />
        </div>
    );
};

export default MainPage;
