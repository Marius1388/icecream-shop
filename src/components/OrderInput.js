import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { useSelector } from 'react-redux';

const OrderInput = () => {
	getProducts();
	const products = useSelector((state) => state.products);

	// console.log(products);

	return (
		<div>
			<h1> Order one</h1>
			<Form>
				<FormGroup>
					<Label for="exampleSelect">Select</Label>
					<Input type="select" name="select" id="exampleSelect">
						{products.map((product) => (
							<option>product.name</option>
						))}
					</Input>
				</FormGroup>
			</Form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps)(OrderInput);
