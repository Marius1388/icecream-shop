import { combineReducers} from 'redux';
import orderReducer from './orderReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    order: orderReducer,
    error: errorReducer
})