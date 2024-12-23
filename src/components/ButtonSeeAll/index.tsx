import './ButtonSeeAll.scss';

const ButtonSeeAll = () => {
    return (
        <div className="arrow-button">
            <span className="arrow-button__text">See All</span>
            <div className="arrow-button__wrap">
                <button className="arrow-button__btn-prev"></button>
                <button className="arrow-button__btn-next"></button>
            </div>
        </div>
    );
};

export default ButtonSeeAll;
