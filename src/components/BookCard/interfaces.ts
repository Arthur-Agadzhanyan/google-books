export interface BookCardProps{
    img: {
        smallThumbnail: string,
        thumbnail: string,      
    },
    categories: string[],
    title: string,
    authors: string[]
}