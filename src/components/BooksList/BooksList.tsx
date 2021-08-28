import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import { BookInfo } from '../../models/response/BookInfo';
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
import styles from "./books-list.module.scss"

const BooksList = () => {
    const { store } = useContext(Context)

    if(!store.loading && !store.books.length){
        return <h1 className={styles.not_found}>По вашему запросу ничего не найдено</h1>
    }

    return (
        <>
        {
            !store.loading && store.books.length && (
                <p className={styles.total_books}>Found {store.totalItems} books</p>
            )
        }
            <div className={styles.books_list}>
                {
                    store && store.books.length
                        ? (
                            store.books.map((book: BookInfo, i: number) => (

                                <BookCard
                                    key={`${book}_${i}`}
                                    id={book.id}
                                    img={book.volumeInfo.imageLinks}
                                    categories={book.volumeInfo.categories}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                />
                                
                            ))
                        )

                        : ""
                }
            </div>

            {store.loading && (
                <Loader/>
            )}
        </>
    );
}

export default observer(BooksList);
