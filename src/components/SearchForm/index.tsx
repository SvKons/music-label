import './SearchForm.scss';

const SearchForm = () => {
    return (
        <>
            <form className="search__form">
                <input type="text" placeholder="Артисты, треки" className="nav__input" />
                <button className="search__form-button">
                    <i className="search__form-button__icon"></i>
                </button>
            </form>
        </>
    );
};

export default SearchForm;
