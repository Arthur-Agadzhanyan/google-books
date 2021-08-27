import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import styles from "./book-card.module.scss"
import { BookCardProps } from './interfaces';
import undefinedImage from '../../assets/undefined_book.png'
import { Link } from 'react-router-dom';

const BookCard: FC<BookCardProps> = ({id,img,title,categories,authors}) => {

    return (
        <Link to={`/books/${id}`} className={styles.book}>
            
            {img && img.thumbnail 
                ? <img className={styles.book__image} src={img.thumbnail} alt="Изображение книги"/>
                : <img className={styles.book__image} src={undefinedImage} alt="Изображение книги"/>
            }

            <div className={styles.book__info}>

                {categories && categories.map((category,i)=>(
                    <p key={`${category}_${i}`} className={styles.book__category}> {category} </p>
                ))}
                
                <p className={styles.book__title}>{title}</p>

                {authors && authors.map((author,i)=>(
                    <p key={`${author}_${i}`} className={styles.book__author}> {author} </p>
                ))}

            </div>
        
        </Link>
    );
}

export default observer(BookCard);
