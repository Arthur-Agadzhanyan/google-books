export interface DetailBookInfo {
    categories: string[],
    title: string,
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string,
        small?: string,
        medium?: string,
        large?: string
    },
    authors: string[],
    description: string,
    length: number
}