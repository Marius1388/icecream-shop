import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import OrderInput from './components/OrderInput';
import OrdersList from './components/OrdersList';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/authActions';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	render() {
		return (
			<Provider store={store}>
				<div>
					<AppNavbar></AppNavbar>
					<Switch>
						<Route exact path="/order" component={OrderInput} />
						<Route exact path="/" component={OrdersList} />
					</Switch>
				</div>
			</Provider>
		);
	}
}

export default App;
