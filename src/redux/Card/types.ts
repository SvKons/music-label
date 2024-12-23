export interface ICardData {
    id: string | number;
    imgUrl: string;
    url?: string;
    title: string;
    time: string;
    author: string;
}

export interface CardProps {
    data: {
        id: string;
        title: string;
        [key: string]: any;
    };
}
