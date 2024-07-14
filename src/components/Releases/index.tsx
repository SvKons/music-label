import Pagination from '../Pagination';
import SearchForm from '../SearchForm';
import './Releases.scss';
import ReleasesLink from '../ReleasesLink/index';
import { CardList, ReleasesList } from './utils';
import CardReleasesLink from '../CardReleasesLink';

const Releases = () => {
    return (
        <>
            <div className="releases wrapper">
                <div className="releases__wrap">
                    <div className="releases__title">Избранные песни</div>
                    <div className="releases__group">
                        {ReleasesList.slice(0, 4).map((data, index) => {
                            return <ReleasesLink key={index} data={data} />;
                        })}
                    </div>
                </div>

                <div className="artists-wrap">
                    <div className="search">
                        <SearchForm />
                        <div className="search__filter">
                            <ul className="search__filter-list">
                                <li className="search__filter-item">
                                    <button className="search__filter-button active">Избранные</button>
                                </li>
                                <li className="search__filter-item">
                                    <button className="search__filter-button">Популярные</button>
                                </li>
                                <li className="search__filter-item">
                                    <button className="search__filter-button">Новые</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards">
                        {CardList.slice(0, 18).map((data, index) => {
                            return <CardReleasesLink key={index} data={data} />;
                        })}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Releases;
