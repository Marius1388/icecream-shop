import { combineReducers} from 'redux';
import orderReducer from './orderReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    orders: orderReducer,
    error: errorReducer
})