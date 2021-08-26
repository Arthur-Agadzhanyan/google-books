import axios from "axios";

export default class BooksService {
    static async getBooks(url: string,queryValue:string,category:string, sorting:string,currentPage: number){
        const ctg = category === "all" ? "all" : `subject:${category}`
        const fields = `fields=kind,totalItems,items(id,volumeInfo(title,categories,authors,imageLinks))`
        const maxBooks = 30

        const qV = queryValue ? `+${queryValue}` : ""

        console.log(`${url}?q=${ctg}${qV}&printType=books&orderBy=${sorting}&maxResults=${maxBooks}&startIndex=${currentPage}&${fields}`);
        

        return axios.get(`${url}?q=${ctg}${qV}&printType=books&orderBy=${sorting}&maxResults=${maxBooks}&startIndex=${currentPage}&${fields}`)
    }
}