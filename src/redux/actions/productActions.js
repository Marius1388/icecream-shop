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

export const getProductsStartAsync = () => (dispatch) => {
	dispatch(getProductsStart());
	// axios
	// 	.get('/api/products/')
	// 	.then((res) =>
	axios
		.get('http://localhost:3000/api/products')
		.then((res) => dispatch(getProductsSuccess(res)))
		.catch((err) => dispatch(getProductsFailure(err)));
};
