import books from './reducers/booksReducer';
import { createStore } from "redux";

export const store = createStore(
    books
)