export interface IPlaylistSong {
    id?: string | number;
    author?: string | number;
    title?: string;
    imgUrl?: string;
    time?: string;
    iconPlay?: string;
    iconLike?: string;
}

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
