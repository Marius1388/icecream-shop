import {
	GET_ORDERS,
	ADD_ORDER_SUCCESS,
	ADD_ORDER_START,
	ADD_ORDER_FAILURE,
	EDIT_ORDER,
	DELETE_ORDER,
	ORDERS_LOADING,
} from '../constants';

const initialState = {
	orders: [],
	sending: false,
	errorMessage: undefined,
};

export default function orderReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				orders: action.payload,
				loading: false,
			};
		case DELETE_ORDER:
			return {
				...state,
				orders: state.orders.filter((order) => order._id !== action.payload),
			};
		case ADD_ORDER_START:
			return {
				...state,
				sending: true,
			};
		case ADD_ORDER_SUCCESS:
			return {
				...state,
				orders: [action.payload, ...state.orders],
				sending: false,
			};
		case ADD_ORDER_FAILURE:
			return {
				...state,
				sending: false,
				error: action.payload,
			};
		case EDIT_ORDER:
			return {
				...state,
				orders: state.orders.filter((order) => order._id === action.payload)[0],
			};
		case ORDERS_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
