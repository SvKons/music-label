import ButtonSeeAll from '../ButtonSeeAll';
import './SlickList.scss';

interface ISlickListProps {
    title: string;
    data: Array<{ id: string; [key: string]: any }>;
    cardComponent: React.ComponentType<{ data: any }>;
    visibleCount?: number;
}

const SlickList = ({ title, data, cardComponent: CardComponent, visibleCount = 4 }: ISlickListProps) => {
    return (
        <div className="slick-list">
            <div className="slick-list__top-wrap">
                <h2 className="slick-list__title">{title}</h2>
                <ButtonSeeAll />
            </div>
            <div className="slick-list__songs-block">
                {data.slice(0, visibleCount).map(item => (
                    <CardComponent key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default SlickList;
