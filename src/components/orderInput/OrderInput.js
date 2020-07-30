import React from 'react';

import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getProductsStartAsync } from '../../redux/actions/productActions';
import { addOrderAsync } from '../../redux/actions/orderActions';
import PropTypes from 'prop-types';

class OrderInput extends React.Component {
	state = {
		flavour: '',
		numberOfScoops: '',
		pricePerScoop: '',
		totalCost: '',
	};

	static propTypes = {
		flavour: PropTypes.string,
		numberOfScoops: PropTypes.number,
		pricePerScoop: PropTypes.number,
		totalCost: PropTypes.number,
	};

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
		const { addOrderAsync } = this.props;

		const newOrder = {
			flavour: this.state.flavour,
			numberOfScoops: parseInt(this.state.numberOfScoops),
			pricePerScoop: this.state.pricePerScoop,
			totalCost: this.state.totalCost,
		};

		//Add orders via addOrder action
		if (this.state.flavour && this.state.numberOfScoops) {
			this.setState({ msg: null });
			console.log(`trying to add order: ${JSON.stringify(newOrder)}`);

			addOrderAsync(newOrder);
		} else {
			this.setState({ msg: 'Please enter all fields' });
		}
	};

	componentDidMount() {
		const { getProductsStartAsync } = this.props;
		getProductsStartAsync();
	}

	render() {
		const { products } = this.props.products;

		return (
			<div className="orderInput-page">
				<h1> Order one</h1>
				{this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
				<Form className="form" onSubmit={this.onSubmitForm}>
					<FormGroup>
						<Label for="flavour">Select Flavour </Label>
						<Input
							type="select"
							name="flavour"
							id="flavourSelect"
							onClick={this.onSelect}
						>
							<option defaultValue="- Pick one -">Pick one !</option>
							{products.map((product) => (
								<option key={product._id} value={JSON.stringify(product)}>
									{product.name}
								</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<p> The price / scoop is: ${this.state.pricePerScoop}</p>
					</FormGroup>

					<FormGroup>
						<Label for="numberOfScoops"> Number of Scoops </Label>
						<Input
							type="number"
							name="numberOfScoops"
							id="numberOfScoops"
							min="0"
							style={{ maxWidth: 40 }}
							onChange={this.onChange}
						></Input>
					</FormGroup>
					<br></br>
					<FormGroup>
						<h2> Your total is ${this.state.totalCost}</h2>
					</FormGroup>
					<Button color="dark" style={{ marginTop: '2rem' }} block>
						Add Order
					</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
	addOrderAsync: (order) => dispatch(addOrderAsync(order)),
	getProductsStartAsync: () => dispatch(getProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInput);
