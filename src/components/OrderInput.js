import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getProductsStartAsync } from '../redux/actions/productActions';

class OrderInput extends React.Component {
	componentDidMount() {
		const { getProductsStartAsync } = this.props;

		getProductsStartAsync();
	}

	render() {
		const { products } = this.props;
		console.log(`props are ${this.props.products}`);

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
	}
}

const mapDispatchToProps = (dispatch) => ({
	getProductsStartAsync: () => dispatch(getProductsStartAsync()),
});

export default connect(null, mapDispatchToProps)(OrderInput);
