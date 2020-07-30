import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../redux/actions/orderActions';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class OrdersList extends Component {
	state = {
		msg: null,
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
	};

	componentDidMount() {
		const { getOrders } = this.props;
		getOrders();
	}

	render() {
		const { orders } = this.props.orders;
		return (
			<div className="container">
				<h1 className="">Orders List</h1>
				{this.props.isAuthenticated ? (
					<Button
						color="dark"
						style={{ marginBottom: '2rem' }}
						// send user to create order page
						href="/order"
					>
						Add new order
					</Button>
				) : (
					<h4 className="mb-3 ml-4">Please log in to manage icecream items</h4>
				)}
				<ListGroup>
					{orders.map((order) => (
						<ListGroupItem>
							<p>{order.flavour}</p>
							<p>price: ${order.totalCost}</p>
						</ListGroupItem>
					))}
				</ListGroup>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	orders: state.orders,
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
	getOrders: () => dispatch(getOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
