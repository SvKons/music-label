export interface ICardData {
    id: string | number;
    imgUrl: string;
    url?: string;
    title: string;
    time: string;
    author: string;
}

export interface ICardProps {
    data: {
        id: string;
        title: string;
        [key: string]: any;
    };
}
