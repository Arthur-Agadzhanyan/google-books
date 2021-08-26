import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import styles from "./search.module.scss"
import Select from 'react-select'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const categories = [
    { value: 'all', label: 'all' },
    { value: 'art', label: 'art' },
    { value: 'biography', label: 'biography' },
    { value: 'computers', label: 'computers' },
    { value: 'history', label: 'history' },
    { value: 'medical', label: 'medical' },
    { value: 'poetry', label: 'poetry' }
  ]

const sortingBy = [
    { value: 'relevance', label: 'relevance' },
    { value: 'newest', label: 'newest' },
] 


const Search = () => {
    const {store} = useContext(Context)

    const [category, setCategory] = useState("all");
    const [sorting, setSorting] = useState("relevance");
    const [inputValue, setInputValue] = useState("")

    const [currentPage, setCurrentPage] = useState(0);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if(fetching){
            store.getBooks(inputValue,category,sorting,currentPage,setCurrentPage)
            setFetching(false)
        }
    }, [fetching]);

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     }

    // }, [fetching])

    // const scrollHandler = (e: any) => {
    //     if (window) {
    //         if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && users.length < totalCount) {
    //             setFetching(true)
    //         }
    //     }
    // }

    const changeSorting = (select: { value: string; label: string; } | null)=>{
        if(select){
            setSorting(select.value)
            setCurrentPage(0)
            setFetching(true)
            store.setBooks([])
        }
    }

    const changeCategory = (select: { value: string; label: string; } | null)=>{
        if(select){
            setCategory(select.value)
            setCurrentPage(0)
            setFetching(true)
            store.setBooks([])
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }

    const search = (e: FormEvent)=>{
        e.preventDefault()
        if(inputValue.trim()){
            setCurrentPage(0)
            setFetching(true)
            store.setBooks([])
        }
    }

    return (
        <header className={styles.search}>
            <div className={styles.search__container}>
                <h1 className={styles.search__title}>Search for books</h1>
                <form onSubmit={search}>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className={styles.search__input} 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </form>
                <div className={styles.sort}>

                    <div className={styles.sort__item}>
                        <label className={styles.item__label} htmlFor="#categories">Categories</label>

                        <Select 
                            id="#categories" 
                            className={styles.item__select}  
                            options={categories} 
                            defaultValue={categories[0]}
                            onChange={changeCategory}
                        />

                    </div>

                    <div className={styles.sort__item}>
                        <label className={styles.item__label} htmlFor="#sorting">Sorting by</label>

                        <Select 
                            id="#sorting" 
                            className={styles.item__select}  
                            options={sortingBy} 
                            defaultValue={sortingBy[0]}
                            onChange={changeSorting}
                        />

                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default observer(Search)
