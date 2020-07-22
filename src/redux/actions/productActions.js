import axios from 'axios';
import {
	GET_PRODUCTS_START,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,
} from '../constants';

export const getProductsStart = (products) => ({
	type: GET_PRODUCTS_START,
});

export const getProductsSuccess = (products) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: products,
});

export const getProductsFailure = (errorMessage) => ({
	type: GET_PRODUCTS_FAILURE,
	payload: errorMessage,
});

export const getProductsStartAsync = () => async (dispatch) => {
	dispatch(getProductsStart());
	try {
		const response = await axios.get('http://localhost:3000/api/products');
		const data = await response.data;
		console.log(`data requested issss ${JSON.stringify(data)}`);

		dispatch(getProductsSuccess(data));
	} catch (error) {
		const errorResponse = error.response.data || 'Something went wrong';
		dispatch(getProductsFailure(errorResponse));
	}
};
