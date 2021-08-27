import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import {Link, useParams} from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { observer } from 'mobx-react-lite';

import undefinedImage from '../assets/undefined_book.png'
import styles from "../styles/book-page.module.scss"


interface PageParams{
    id: string
}

const Book = () => {
    const {store} = useContext(Context)
    const {title,authors,categories,description,imageLinks} = store.detailBook

    const bookId = useParams<PageParams>().id
    
    useEffect(()=>{  
        store.getDetailsOfBook(bookId)
    },[bookId,store])
 
    if(store.loading){
        return <Loader/>
    }

    if(!store.loading && !title){
        return <h1>Запрошеная вами книга не найдена</h1>
    }

    return (
        <div className={styles.book}>
            
            <div className={styles.book__image_container}>
                {imageLinks 
                    ? <img className={styles.image} src={imageLinks.thumbnail} alt="Изображение книги"/>
                    : <img className={styles.image} src={undefinedImage} alt="Изображение книги"/>
                }
            </div>

            <div className={styles.book__info}>
                <div className={styles.info__container}>

                    <p className={styles.info__categories}>
                        {categories && categories.join(" / ")}
                    </p>

                    <p className={styles.info__title}>
                        {title}
                    </p>

                    {authors && authors.map((author,i)=>(
                        <p key={`${author}_${i}`} className={styles.info__author}>{author}</p>
                    ))}

                    {description && <div className={styles.info__description} dangerouslySetInnerHTML={{ __html: description }}/>}
                    <div className={styles.go_back_container}>
                        <Link to="/" className={styles.go_back}>Go back</Link>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default observer(Book);
