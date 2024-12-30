import './ButtonArrow.scss';

const ButtonsArrow = () => {
    return (
        <div className="arrow-buttons">
            <button className="arrow-buttons__button arrow-buttons__button_prev">
                <svg className="arrow-buttons__icon arrow-buttons__icon_left" viewBox="0 0 24 24">
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </button>
            <button className="arrow-buttons__button arrow-buttons__button_next">
                <svg className="arrow-buttons__icon" viewBox="0 0 24 24">
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </button>
        </div>
    );
};

export default ButtonsArrow;
