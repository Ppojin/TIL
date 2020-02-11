// Root reducer
import { combineReducers } from 'redux';
import BookReducer from './ReducerBooks';
import ActiveBook from './ReducerActiveBook';

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook
})

export default rootReducer;