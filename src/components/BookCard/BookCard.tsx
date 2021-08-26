import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import styles from "./book-card.module.scss"
import { BookCardProps } from './interfaces';
import undefinedImage from '../../assets/undefined_book.png'

const BookCard: FC<BookCardProps> = ({img,title,categories,authors}) => {

    return (
        <div className={styles.book}>
            
            {img 
                ? <img className={styles.book__image} src={img.smallThumbnail} alt="Изображение книги"/>
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
        
        </div>
    );
}

export default observer(BookCard);
