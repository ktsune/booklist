import { CREATE_BOOK } from '../actions/create_book';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [].concat(action.payload).concat(state);
  }
  return state;
}
