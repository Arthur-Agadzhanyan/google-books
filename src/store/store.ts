import { Dispatch, SetStateAction } from "react"
import { makeAutoObservable } from "mobx"
import BooksService from "../services/BooksService"
import { BookInfo } from "../models/response/BookInfo"

const API_URL = "https://www.googleapis.com/books/v1/volumes"

export default class Store {
    books = [] as BookInfo[]
    loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setBooks(arr: BookInfo[]){
        this.books = arr
    }

    setLoading(bool: boolean){
        this.loading = bool
    }

    async getBooks(queryValue: string, category: string, sorting: string, currentPage:number,setCurrentPage: Dispatch<SetStateAction<number>>){
            this.setLoading(true)
            try {
                const res = await BooksService.getBooks(API_URL,queryValue,category,sorting,currentPage)
                setCurrentPage(prev=>prev= prev + 29)

                console.log(res.data.items)

                this.setBooks([...this.books, ...res.data.items])
            } catch (error:any) {
                console.log(error)
            } 
            
            finally{
                this.setLoading(false)
            }
    }
}