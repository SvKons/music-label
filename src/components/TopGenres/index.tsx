import TopGenresLink from './TopGenresLink';
import './TopGenres.scss';
import { genres } from '../../assets/data/dataGenres';
import { IGenre } from '../../redux/Genre/types';

interface IGenresProps {
    data: IGenre[];
}

const TopGenres = ({ data }: IGenresProps) => {
    return (
        <div className="top-genres">
            <h2 className="top-genres__title">Top Genres</h2>
            <div className="top-genres__wrap">
                {genres.slice(0, 8).map((data: IGenre) => (
                    <TopGenresLink key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default TopGenres;
