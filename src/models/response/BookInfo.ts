export interface BookInfo{
    id: string,
    volumeInfo:{
        categories: string[],
        title: string,
        imageLinks:{
            smallThumbnail: string,
            thumbnail: string,
            small?: string,
            medium?: string,
            large?: string
        },
        authors: string[],
        description?: string,
    }
}