import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes"
const API_KEY = process.env.REACT_APP_API_KEY

export default class BooksService {

    // Для загрузки следующих 30 книг
    static async getBooks(queryValue:string,category:string, sorting:string,currentPage: number){
        const ctg = category === "all" ? "all" : `subject:${category}`
        const fields = `fields=kind,totalItems,items(id,volumeInfo(title,categories,authors,imageLinks))`
        const maxBooks = 30

        const qV = queryValue ? `+intitle:${queryValue}` : ""
        
        return axios.get(`${API_URL}?q=${ctg}${qV}&printType=books&orderBy=${sorting}&maxResults=${maxBooks}&startIndex=${currentPage}&${fields}&key=${API_KEY}`)
    }

    // Для загрузки информации об одной книге
    static async getDetailsOfBook(id: string){
        const fields = `fields=volumeInfo(title,categories,authors,imageLinks,description)`

        return axios.get(`${API_URL}/${id}?${fields}&key=${API_KEY}`)
    }

}
