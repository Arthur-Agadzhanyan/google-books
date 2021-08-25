interface BooksState {
    books: string[]
}

const initialState = {
    books: []
}

type Action = {
    type: string,
    payload: string[]
}

const booksReducer = (state:BooksState = initialState, action:Action)=>{
    switch (action.type) {

        case "ALL_BOOKS":
            return {
                ...state,
                books: [...action.payload]
            }
    
        default:
            return state
    }
}

export default booksReducer