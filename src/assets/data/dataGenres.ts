import { IGenre } from '../../redux/Genre/types';

export const genres: IGenre[] = [
    { id: 1, genre: 'Hip Hop', trackCount: 1590, imgUrl: require('../img/g-1.png') },
    { id: 2, genre: 'Indie Rock', trackCount: 1110, imgUrl: require('../img/g-2.png') },
    { id: 3, genre: 'Rock', trackCount: 4140, imgUrl: require('../img/g-3.png') },
    { id: 4, genre: 'Country', trackCount: 910, imgUrl: require('../img/g-4.png') },
    { id: 5, genre: 'Jazz', trackCount: 2912, imgUrl: require('../img/g-5.png') },
    { id: 6, genre: 'Metal', trackCount: 2410, imgUrl: require('../img/g-6.png') },
    { id: 7, genre: 'Classical', trackCount: 4140, imgUrl: require('../img/g-7.png') },
    { id: 8, genre: 'Pop', trackCount: 2150, imgUrl: require('../img/g-8.png') },
];
