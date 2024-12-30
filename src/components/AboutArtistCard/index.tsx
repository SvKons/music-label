import './AboutArtistCard.scss';

const AboutArtistCard = () => {
    return (
        <div className="about-artist">
            <div>
                <img src={require('./img/artist.png')} alt="Фото артиста" />
            </div>
            <div className="about-artist__content">
                <h2 className="about-artist__name">Monster Baby</h2>
                <span className="about__artist__text">Bio:</span>
                <p className="about-artist__description">
                    Lorem ipsum dolor sit amet consectetur. Faucibus cursus elementum sed facilisis arcu. Sapien et volutpat interdum id. Nunc porttitor non
                    euismod donec sagittis pretium. Dolor elementum aliquet dolor eget sed quam vel dolor in. Amet nunc duis aliquet est rhoncus malesuada. Ac
                    nunc a bibendum sem ut lobortis senectus faucibus volutpat.
                </p>
                <p className="about-artist__description">
                    Mauris faucibus venenatis turpis tincidunt nibh. Dolor quis lobortis donec dis fermentum neque sed eget. Lectus et amet varius tortor
                    malesuada vitae volutpat ut enim. Convallis nibh eu vel maecenas odio euismod quam vel facilisis. Mauris cum aliquam habitant lacus ut duis
                    fames.
                </p>
            </div>
        </div>
    );
};

export default AboutArtistCard;
