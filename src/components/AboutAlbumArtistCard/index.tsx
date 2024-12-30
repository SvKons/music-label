import './AboutAlbumArtistCard.scss';

const AboutAlbumArtistCard = () => {
    return (
        <div className="album-detail">
            <img src={require('./img/album.png')} alt="Album Cover" className="album-detail__image" />
            <div className="album-detail__text-block">
                <p className="album-detail__album-name">Moon Light Dust</p>
                <p className="album-detail__artist-name">
                    <span className="album-detail__artist-name_transparent">Artist:</span> Monster Baby
                </p>
                <p className="album-detail__features">
                    <span className="album-detail__features_transparent">Features:</span> Elysia Rayne, Jaxon Grey, Harper Valencia
                </p>
                <p className="album-detail__time">25 min 50 sec</p>
            </div>
        </div>
    );
};

export default AboutAlbumArtistCard;
