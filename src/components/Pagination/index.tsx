import './Pagination.scss';

const Pagination = () => {
    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li className="pagination__item">
                    <button className="pagination__button">
                        <svg className="pagination__icon pagination__icon__left" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                    </button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button pagination__button__active">1</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button">2</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button">3</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__button">
                        <svg className="pagination__icon" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
