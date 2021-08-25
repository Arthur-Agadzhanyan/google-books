import React from 'react';
import styles from "./book-card.module.scss"

const BookCard = () => {
    return (
        <div className={styles.book}>
            <img className={styles.book__image} src="http://books.google.com/books/content?id=1WqjSf8FwooC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73Pcdh2FfCKCPMqhgEsrUXgiDlXYLNiQ8-S7QYkQMGXaJRZYNWWXEifA3Sug9wPezKmYz5AVoLnqsiT_NEyAhjOHnvS2WVWf3ys6s0iATYOsWh5gQqTVih6_CUVyKTf2kPMTVTw&source=gbs_api" alt="Изображение книги"/>

            <div className={styles.book__info}>
                <p className={styles.book__category}>Computers</p>

                <p className={styles.book__title}>Node.js путеводитель по технологии</p>

                <p className={styles.book__author}>Кирилл Сухов</p>
            </div>
        
        </div>
    );
}

export default BookCard;
