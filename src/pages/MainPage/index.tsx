import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
import './MainPage.scss';
import TrendingAlbum from '../../components/TrendingAlbum';

const MainPage = () => {
    return (
        <div className="main">
            <Header />
            <main className="main">
                <TopMenu />
                <section className="trending wrapper">
                    <TrendingAlbum />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MainPage;
