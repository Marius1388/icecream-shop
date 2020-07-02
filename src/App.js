import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import OrderList from './components/OrderList';
import OrderInput from './components/OrderInput';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Switch>
					<Route exact path="/" component={OrderList} />
					<Route exact path="/addorder" component={OrderInput} />
				</Switch>
			</Provider>
		);
	}
}

export default App;
