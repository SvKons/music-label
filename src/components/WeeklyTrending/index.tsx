import { ICardProps } from '../../redux/Card/types';

const WeeklyTrending = ({ data }: ICardProps) => {
    return (
        <div className="card-weekly">
            <h3>{data.title}</h3>
        </div>
    );
};

export default WeeklyTrending;
