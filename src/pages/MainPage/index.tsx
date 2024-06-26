import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Releases from '../../components/Releases';
import Footer from '../../components/Footer';
import './MainPage.scss';

const MainPage = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <TopMenu />
                <Releases />
            </main>

            <Footer />
        </div>
    );
};

export default MainPage;
