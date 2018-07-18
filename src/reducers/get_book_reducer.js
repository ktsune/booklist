import { FETCH_BOOKS } from '../actions/get_book';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return [].concat(action.payload).concat(state);
  }
  return state;
}
