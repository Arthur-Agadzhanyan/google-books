import React from 'react';
import styles from "./search.module.scss"
import Select from 'react-select'

const Search = () => {
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

    return (
        <header className={styles.search}>
            <div className={styles.search__container}>
                <h1 className={styles.search__title}>Search for books</h1>

                <input type="text" placeholder="Search" className={styles.search__input} />

                <div className={styles.sort}>

                    <div className={styles.sort__item}>
                        <label className={styles.item__label} htmlFor="#aaa">Categories</label>
                        <Select className={styles.item__select}  id="#aaa" options={categories} defaultValue={categories[0]}/>
                    </div>

                    <div className={styles.sort__item}>
                        <label className={styles.item__label} htmlFor="#aaa">Sorting by</label>
                        <Select className={styles.item__select}  id="#aaa" options={sortingBy} defaultValue={sortingBy[0]}/>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Search;
