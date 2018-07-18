const axios = require('axios');

  export const FETCH_BOOKS = 'FETCH_BOOKS'

  export function fetchBooks() {
    return {
      type: FETCH_BOOKS,
      payload: axios.get('http://localhost:3001/books')
    }
  }
