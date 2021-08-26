import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import { BookInfo } from '../../models/response/BookInfo';
import BookCard from '../BookCard/BookCard';
import styles from "./books-list.module.scss"

const BooksList = () => {
    const {store} = useContext(Context)

    if(store.loading){
        return <h1>Loading</h1>
    }

    return (
        <div className={styles.books_list}>
            {
            store && store.books.length
            ? (
                store.books.map((book: BookInfo,i:number)=>(
                    <BookCard 
                        key={`${book}_${i}`}
                        img={book.volumeInfo.imageLinks} 
                        categories={book.volumeInfo.categories}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                    />
                ))
            )
            :(
                <h1>По вашему запросу ничего не найдено</h1>
            )
        
        }
        </div>
    );
}

export default observer(BooksList);
