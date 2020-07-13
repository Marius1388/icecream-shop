import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import OrderInput from './components/OrderInput';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={OrderInput} />
			</Switch>
		);
	}
}

export default App;
