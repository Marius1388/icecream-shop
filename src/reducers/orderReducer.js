import {GET_PRODUCTS, PRODUCTS_LOADING, GET_ORDERS, ADD_ORDER, EDIT_ORDER, DELETE_ORDER, ORDERS_LOADING} from '../constants'

const initialState = {
    products:[],
    orders:[],
    loading: false
}

export default function orders(state = initialState, action) {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }
        case DELETE_ORDER:
            return{
                ...state,
                orders: state.orders.filter(order =>order._id !== action.payload)
            }
        case ADD_ORDER:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            }
        case EDIT_ORDER:
            return{
                ...state,
                orders: state.orders.filter(order =>order._id === action.payload)[0]
        }
        case ORDERS_LOADING:
            return{
                ...state,
                loading: true
            }
        case PRODUCTS_LOADING:
            return{
                ...state,
                loading: true
            }
            default:
                return state;
    }
}