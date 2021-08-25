import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from "./books-list.module.scss"

const BooksList = () => {
    return (
        <div className={styles.books_list}>
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
            <BookCard/> 
        </div>
    );
}

export default BooksList;
