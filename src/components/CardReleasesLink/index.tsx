import { IReleasesCard } from '../../redux/Releases/types';

interface CardReleasesLinkProps {
    data: IReleasesCard;
}

const CardReleasesLink = ({ data }: CardReleasesLinkProps) => {
    const isImg = Boolean(data?.imgUrl);
    const isSongName = Boolean(data?.name);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <>
            <div className="card">
                {isImg && (
                    <div className="card__img-wrap">
                        <img className="card__img" src={data?.imgUrl} alt="Фото релиза" />
                        <img className="card__like" src={data?.iconImg} />
                    </div>
                )}
                <div className="card__content">
                    <div className="card__top">
                        {isSongName && (
                            <a href={data?.url} className="card__song-name">
                                {data?.name}
                            </a>
                        )}
                        {isTime && <span className="card__time">{data?.time}</span>}
                    </div>
                    {isAuthor && <span className="card__author">{data?.author}</span>}
                </div>
            </div>
        </>
    );
};

export default CardReleasesLink;
