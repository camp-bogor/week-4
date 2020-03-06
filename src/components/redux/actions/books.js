import axios from 'axios';

export const getBooks = () => {
    return{
        type: 'GET_BOOKS',
        payload: axios({
            method: "get",
            url: "http://192.168.1.8:8000/book"
        })
    }
}

export const createBook = (data) => {
    return{
        type: 'CREATE_BOOK',
        payload: axios({
            method: "POST",
            url: "http://20.20.20.182:8000/book",
            data: data
        })
    }
}

export const getBook = (bookId) => {
    return{
        type: 'GET_BOOK',
        payload: axios({
            method: "get",
            url: `http://20.20.20.182:8000/book/${bookId}`
        })
    }
}

export const updateBook = (bookId, data) => {
    return{
        type: "UPDATE_BOOK",
        payload: axios({
            method: "put",
            url: `http://20.20.20.182:8000/book/${bookId}`,
            data: data
        })
    }
}

export const deleteBook = (bookId) => {
    return{
        type: "DELETE_BOOK",
        payload: axios({
            method: "DELETE",
            url: `http://20.20.20.182:8000/book/${bookId}`
        })
    }
}