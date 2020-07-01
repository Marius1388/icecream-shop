import React from 'react';
import './App.css';

import { Provider,connect } from 'react-redux';
import store from './store';
import Order from './components/Order'
import OrderList from './components/OrderList'

import { getOrders } from './actions';

const mapStateToProps = state => {
  return ({
     orders: state.getOrders.orders 
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      onGetOrders: () => dispatch(getOrders())
  }
}

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <h1>hello there</h1>
          <Order />
        </div>
    </Provider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
