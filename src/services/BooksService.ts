import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes"

export default class BooksService {

    static async getBooks(queryValue:string,category:string, sorting:string,currentPage: number){
        const ctg = category === "all" ? "projection:full" : `subject:${category}`
        const fields = `fields=kind,totalItems,items(id,volumeInfo(title,categories,authors,imageLinks))`
        const maxBooks = 30

        const qV = queryValue ? `+${queryValue}` : ""

        console.log(`${API_URL}?q=${ctg}${qV}&printType=books&orderBy=${sorting}&maxResults=${maxBooks}&startIndex=${currentPage}&${fields}`);
        

        return axios.get(`${API_URL}?q=${ctg}${qV}&printType=books&orderBy=${sorting}&maxResults=${maxBooks}&startIndex=${currentPage}&${fields}`)
    }

    static async getDetailsOfBook(id: string){
        const fields = `fields=volumeInfo(title,categories,authors,imageLinks,description)`

        return axios.get(`${API_URL}/${id}?${fields}`)
    }

}
