import React from 'react';

import { Alert, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getProductsStartAsync } from '../../redux/actions/productActions';
import { addOrder } from '../../redux/actions/orderActions';

class OrderInput extends React.Component {
	state = {
		flavour: '',
		numberOfScoops: null,
		pricePerScoop: null,
		totalCost: null,
	};

	onSelect = (e) => {
		let obj = JSON.parse(e.target.value);
		this.setState({
			flavour: obj.name,
			pricePerScoop: obj.pricePerScoop,
		});
	};

	onChange = (e) => {
		this.setState({
			numberOfScoops: e.target.value,
			totalCost: e.target.value * this.state.pricePerScoop,
		});
	};
	onSubmit = (e) => {
		e.preventDefault();

		const newOrder = {
			flavour: this.state.name,
			numberOfScoops: this.state.numberOfScoops,
			pricePerScoop: this.state.pricePerScoop,
			totalCost: this.state.totalCost,
		};

		//Add orders via addOrder action
		if (this.state.flavour && this.state.numberOfScoops) {
			this.setState({ msg: null });
			this.props.addOrder(newOrder);
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
				<Form className="form">
					<FormGroup>
						<Label for="flavour">Select Flavour</Label>
						<Input
							type="select"
							name="flavour"
							id="flavourSelect"
							onClick={this.onSelect}
						>
							<option defaultValue="- Pick one -">- Pick one -</option>
							{products.map((product) => (
								<option key={product._id} value={JSON.stringify(product)}>
									{product.name}
								</option>
							))}
						</Input>
					</FormGroup>
					<FormGroup>
						<p> The price / scoop is: $ {this.state.pricePerScoop}</p>
					</FormGroup>
					<br></br>
					<FormGroup>
						<Label for="numberOfScoops"> Number of Scoops</Label>
						<Input
							type="number"
							name="numberOfScoops"
							id="numberOfScoops"
							placeholder="Number of scoops"
							onChange={this.onChange}
						/>
					</FormGroup>
					<br></br>
					<FormGroup>
						<h2> Your total is ${this.state.totalCost}</h2>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
	addOrder: () => dispatch(addOrder()),
	getProductsStartAsync: () => dispatch(getProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInput);
