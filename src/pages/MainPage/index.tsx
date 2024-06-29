import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';
import './MainPage.scss';

const MainPage = () => {
    return (
        <div className="main">
            <Header />
            <main className="main">
                <TopMenu />
            </main>

            <Footer />
        </div>
    );
};

export default MainPage;
