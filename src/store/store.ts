import { DetailBookInfo } from './../models/response/DetailBookInfo';
import { Dispatch, SetStateAction } from "react"
import { makeAutoObservable } from "mobx"
import BooksService from "../services/BooksService"
import { BookInfo } from "../models/response/BookInfo"

export default class Store {
    books: BookInfo[] = [] as BookInfo[]
    detailBook: DetailBookInfo = {} as DetailBookInfo

    totalItems: number = 0
    loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setBooks(arr: BookInfo[]){
        this.books = arr
    }

    setDetailBook(obj: DetailBookInfo){
        this.detailBook = obj
    }

    setTotalItems(num: number){
        this.totalItems = num
    }

    setLoading(bool: boolean){
        this.loading = bool
    }

    // Получение списка книг
    async getBooks(queryValue: string, category: string, sorting: string, currentPage:number,setCurrentPage: Dispatch<SetStateAction<number>>){
            this.setLoading(true)
            try {
                const res = await BooksService.getBooks(queryValue,category,sorting,currentPage)
                setCurrentPage(prev=>prev= prev + 29)

                console.log(res.data)

                this.setTotalItems(res.data.totalItems)
                this.setBooks([...this.books, ...res.data.items])

            } catch (error:any) {
                console.log(error)
            } finally{
                this.setLoading(false)
            }
    }

    // Получение отдельной книги  
    async getDetailsOfBook(id: string){
        this.setLoading(true)
        try {
            const res = await BooksService.getDetailsOfBook(id)
            console.log(res.data)

            this.setDetailBook(res.data.volumeInfo)
        } catch (error) {
            console.log(error)
        } finally{
            this.setLoading(false)
        }
    }
}