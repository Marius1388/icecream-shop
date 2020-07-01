import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import OrderList from './components/OrderList'



class App extends Component {

  
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

export default App;
