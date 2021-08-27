export interface BookCardProps{
    id: string,
    img: {
        smallThumbnail: string,
        thumbnail: string,      
    },
    categories: string[],
    title: string,
    authors: string[]
}