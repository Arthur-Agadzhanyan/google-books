export interface BookInfo{
    id: string,
    volumeInfo:{
        categories: string[],
        title: string,
        imageLinks:{
            smallThumbnail: string,
            thumbnail: string
        },
        authors: string[]
    }
}