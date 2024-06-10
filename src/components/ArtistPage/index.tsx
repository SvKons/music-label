import './ArtistPage.scss';

const ArtistPage = () => {
    return (
        <div className="artistContainer">
            <div className="artistContainer__name">
                <div className="artistContainer__name">
                    <div className="artistContainer__name__img">
                        <img src="/img/michaeljackson.jpg" alt="" />
                    </div>
                </div>
                <p className="artistContainer__name__n">Michael Jackson</p>
            </div>
            <div className="artistContainer__name">
                <div className="artistContainer__name__img">
                    <img src="/img/michaeljackson.jpg" alt="" />
                </div>
                <p className="artistContainer__name__n">David Bowie</p>
            </div>
            <div className="artistContainer__name">
                <div className="artistContainer__name__img">
                    <img src="/img/michaeljackson.jpg" alt="" />
                </div>
                <p className="artistContainer__name__n">David Guetta</p>
            </div>
        </div>
    );
};

export default ArtistPage;
