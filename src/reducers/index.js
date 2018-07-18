import { combineReducers } from 'redux';
import  BooksReducer from './get_book_reducer';
import CreateBookReducer from './create_book_reducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  createBook: CreateBookReducer
});

export default rootReducer;
