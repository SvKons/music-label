export interface IPlaylistData {
    id: number;
    imgUrl: string;
    genre?: string;
    time: string;
    author: string;
    iconImg?: string;
    url?: string;
    title: string;
}

export const playlistsData: IPlaylistData[] = [
    {
        id: 1,
        imgUrl: require('./img/img5.png'),
        title: 'Rhyme Revolution',
        time: '03:20',
        author: 'Elysia Rayne, Jaxon Grey',
    },
    {
        id: 2,
        imgUrl: require('./img/img5.png'),
        title: 'Rhyme Revolution',
        time: '03:20',
        author: 'Elysia Rayne, Jaxon Grey',
    },
    {
        id: 3,
        imgUrl: require('./img/img5.png'),
        title: 'Rhyme Revolution',
        time: '03:20',
        author: 'Elysia Rayne, Jaxon Grey',
    },
    {
        id: 4,
        imgUrl: require('./img/img5.png'),
        title: 'Rhyme Revolution',
        time: '03:20',
        author: 'Elysia Rayne, Jaxon Grey',
    },
    {
        id: 5,
        imgUrl: require('./img/img5.png'),
        title: 'Rhyme Revolution',
        time: '03:20',
        author: 'Elysia Rayne, Jaxon Grey',
    },
];
