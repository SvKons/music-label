import { IReleases } from '../../redux/Releases/types';

interface ReleasesLinkProps {
    data: IReleases;
}

const ReleasesLink = ({ data }: ReleasesLinkProps) => {
    const isImg = Boolean(data?.imgUrl);
    const isTitle = Boolean(data?.title);
    const isTime = Boolean(data?.time);
    const isAuthor = Boolean(data?.author);

    return (
        <>
            <div className="releases__item">
                {isImg && (
                    <div className="releases__item__img-wrap">
                        <img className="releases__item__img" src={data?.imgUrl} alt="Фото релиза" />

                        <img className="releases__item__icon" src={data?.iconImg} />
                    </div>
                )}
                <div className="releases__item__wrap">
                    {isTitle && (
                        <a href={data?.url} className="releases__item__title">
                            {data?.title}
                        </a>
                    )}
                    {isTime && <span className="releases__item__time">{data?.time}</span>}
                </div>
                {isAuthor && <span className="releases__item__author">{data?.author}</span>}
            </div>
        </>
    );
};

export default ReleasesLink;
