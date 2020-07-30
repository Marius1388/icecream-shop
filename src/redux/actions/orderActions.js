import fetchingData from '../../apis/fetchingData';

import {
	GET_ORDERS,
	ADD_ORDER_START,
	ADD_ORDER_SUCCESS,
	ADD_ORDER_FAILURE,
	EDIT_ORDER,
	DELETE_ORDER,
	ORDERS_LOADING,
} from '../constants';
import { returnErrors } from './errorActions';

export const getOrders = () => (dispatch) => {
	dispatch(setOrdersLoading());
	fetchingData
		.get('/api/')
		.then((res) =>
			dispatch({
				type: GET_ORDERS,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const addOrderAsync = (order) => async (dispatch) => {
	dispatch({ type: ADD_ORDER_START });
	const headers = {
		'Content-Type': 'application/json',
	};
	try {
		const response = await fetchingData.post('/api', order, {
			headers: headers,
		});

		const data = await response.data;
		dispatch({ type: ADD_ORDER_SUCCESS, payload: data });
	} catch (error) {
		const errorResponse = error.response.data || 'Something went wrong';

		dispatch({ type: ADD_ORDER_FAILURE, payload: errorResponse });
	}
};

export const editOrder = (order) => (dispatch) => {
	fetchingData
		.put(`/api/${order.id}`, order)
		.then((res) =>
			dispatch({
				type: EDIT_ORDER,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const deleteOrder = (id) => (dispatch) => {
	fetchingData
		.delete(`/api/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_ORDER,
				payload: id,
			})
		)
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

export const setOrdersLoading = () => {
	return {
		type: ORDERS_LOADING,
	};
};
