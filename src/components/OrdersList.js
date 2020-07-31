import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	getOrders,
	deleteOrder,
	editOrder,
} from '../redux/actions/orderActions';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
	onEditClick = (order) => {
		editOrder(this.props.order);
	};
	onDeleteClick = (id) => {
		this.props.deleteOrder(id);
	};

	render() {
		const { orders } = this.props.orders;
		return (
			<div className="container w-75">
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
				<ListGroup className="w-75">
					{orders.map((order) => (
						<ListGroupItem key={order._id} className="d-flex">
							<div className="mr-auto p-2">
								<p>{order.flavour}</p>
								<p>price: ${order.totalCost}</p>
							</div>
							{this.props.isAuthenticated ? (
								<div>
									<Button
										className="p-2"
										color="danger"
										size="sm"
										onClick={this.onDeleteClick.bind(this, order._id)}
									>
										&times;
									</Button>
									<Link
										className="button p-2"
										color="warning"
										size="sm"
										to={`/orders/edit/${order._id}`}
									>
										Edit
									</Link>
								</div>
							) : null}
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
	deleteOrder: (id) => dispatch(deleteOrder(id)),
	editOrder: (order) => dispatch(editOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
