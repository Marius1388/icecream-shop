import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import OrderInput from './components/orderInput/OrderInput';
import OrderInputContainer from './components/orderInput/OrderInputContainer';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={OrderInputContainer} />
			</Switch>
		);
	}
}

export default App;
