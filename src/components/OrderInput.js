import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrder } from '../actions';
import { products } from '../products';

class OrderInput extends Component {
	state = {
		order: {
			productName: '',
			numberOfScoops: '',
			pricePerScoop: '',
			totalCost: '',
			createdAt: '',
			lastModified: '',
		},
		msg: null,
	};

	onChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => console.log(this.state)
		);
	};

	onSubmit = (e) => {
		e.preventDefault();

		const {
			productName,
			numberOfScoops,
			pricePerScoop: { order },
		} = this.state.order;

		//Add order via addOrder action
		if (
			{
				productName,
			} && {
				numberOfScoops,
			}
		) {
			this.props.addOrder(order);
		} else {
			this.setState({
				msg: 'Please enter all fields',
			});
		}
	};

	onSelect = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<div>
				{this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}

				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<div>
							<Label for=""> Flavour </Label>
							<Input
								type="select"
								name="productName"
								id="productName"
								placeholder="Choose a flavour"
								onClick={this.onSelect}
							>
								{/* do a map through products to pick one */}

								{products.map(({ _id, name, pricePerScoop }) => (
									<option key={_id} value={name}>
										{' '}
										{name} -- ${pricePerScoop} /scoop
									</option>
								))}
							</Input>
						</div>
						<div>
							<Label for="numberOfScoops">Number of scoops </Label>
							<Input
								type="number"
								name="numberOfScoops"
								id="numberOfScoops"
								placeholder="How many"
								onChange={this.onChange}
							></Input>
						</div>

						<Button
							color="dark"
							style={{
								marginTop: '2rem',
							}}
							block
							onClick={addOrder}
						>
							Add Order
						</Button>
					</FormGroup>
				</Form>

				<div>
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
	addOrder: (order) => dispatch(addOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInput);
