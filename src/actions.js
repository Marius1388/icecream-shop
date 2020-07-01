import axios from 'axios';
import {GET_ORDERS, ADD_ORDER, EDIT_ORDER, DELETE_ORDER, ORDERS_LOADING, GET_ERRORS, CLEAR_ERRORS} from './constants';

export const getOrders = () => dispatch => {
    dispatch(setOrdersLoading());
    axios.get('/api/').then( res => 
            dispatch({
                type: GET_ORDERS,
                payload: res.data
            }))
            .catch(err =>
                dispatch(returnErrors(err.response.data, err.response.status)))
};

export const addOrder = order => dispatch => {
    axios.post('/api/', order)
        .then(res => 
            dispatch({
                type:ADD_ORDER,
                payload: res.data
            }))
            .catch(err =>
                dispatch(returnErrors(err.response.data, err.response.status)))

}

export const editOrder = order => dispatch => {
    axios.put(`/api/${order.id}`,order).then( res =>
    dispatch({
        type: EDIT_ORDER,
        payload: res.data
    })
    )
    .catch(err =>
     dispatch(returnErrors(err.response.data, err.response.status)))
 
 }

export const deleteOrder = id => dispatch => {
   axios.delete(`/api/${id}`).then( res =>
   dispatch({
       type: DELETE_ORDER,
       payload: id
   })
   )
   .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status)))

}


export const setOrdersLoading = () => {
    return{
        type: ORDERS_LOADING
    }
}


// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status, id }
    };
  };
  
  // CLEAR ERRORS
  export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };