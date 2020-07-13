import { GET_PRODUCTS } from '../constants';

const initialState = {
	products: [],
};

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
}
