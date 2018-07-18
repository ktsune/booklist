const axios = require('axios');

export const CREATE_BOOK = 'CREATE_BOOK'

export function createBook(newBook) {
  var book = {
    book: {
      plot: newBook.summary,
      title: newBook.title
    }
  }
  return {
    type: CREATE_BOOK,
    payload: axios.post('http://localhost:3001/books', book)
  }
}
