import './SearchFilter.scss';

const SearchFilter = () => {
    return (
        <>
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
        </>
    );
};

export default SearchFilter;
