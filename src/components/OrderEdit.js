import React from 'react';

import { connect } from 'react-redux';
import { getProductsStartAsync } from '../redux/actions/productActions';
import { editOrder, fetchOrder } from '../redux/actions/orderActions';

class OrderEdit extends React.Component {
	onSelect = (e) => {
		let obj = JSON.parse(e.target.value);
		this.setState({
			flavour: obj.name,
			pricePerScoop: obj.pricePerScoop,
			numberOfScoops: null,
			totalCost: null,
		});
	};

	onChange = (e) => {
		const price = this.state.pricePerScoop;
		this.setState({
			numberOfScoops: e.target.value,
			totalCost: e.target.value * price,
		});
	};
	onSubmitForm = (e) => {
		e.preventDefault();
		const { editOrder } = this.props;
		const isAuthenticated = this.props.isAuthenticated;

		const newOrder = {
			flavour: this.state.flavour,
			numberOfScoops: parseInt(this.state.numberOfScoops),
			pricePerScoop: this.state.pricePerScoop,
			totalCost: this.state.totalCost,
		};

		//Add orders via addOrder action
		if (this.state.flavour && this.state.numberOfScoops) {
			this.setState({ msg: null });
			// console.log(`trying to add order: ${JSON.stringify(newOrder)}`);
			if (!isAuthenticated) {
				this.setState({ msg: 'Please log in to place order' });
			} else {
				editOrder(newOrder);
			}
		} else {
			this.setState({ msg: 'Please enter all fields' });
		}
	};

	componentDidMount() {
		const { getProductsStartAsync } = this.props;
		getProductsStartAsync();
		const { fetchOrder } = this.props;
		fetchOrder(this.props.match.params.id);
	}

	render() {
		console.log(this.props);

		const { products } = this.props.products;

		return <h1>edit this Order</h1>;
	}
}

const mapStateToProps = (state, ownProps) => ({
	products: state.products,
	isAuthenticated: state.auth.isAuthenticated,
	order: state.orders[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
	editOrder: (order) => dispatch(editOrder(order)),
	fetchOrder: (id) => dispatch(fetchOrder(id)),
	getProductsStartAsync: () => dispatch(getProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit);
