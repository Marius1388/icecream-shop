import React, { Component } from 'react';
import './App.css';

import { Provider,connect } from 'react-redux';
import store from './store';
// import Order from './components/Order'
import OrderList from './components/OrderList'

import { getOrders } from './actions';

const mapStateToProps = state => {
  return ({
     orders: state.orders 
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      onGetOrders: () => dispatch(getOrders())
  }
}

class App extends Component {
  
  componentDidMount(){
    this.props.onGetOrders();
  }
  
  render(){
    return (
    <Provider store = {store}>
        <div className="App">
          <h1>hello there</h1>
          <OrderList />
        </div>
    </Provider>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
