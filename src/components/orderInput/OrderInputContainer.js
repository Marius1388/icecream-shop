import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import OrderInput from './OrderInput';

const mapStateToProps = (state) => ({
	loading: !state,
});

const OrderInputContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(OrderInput);

export default OrderInputContainer;
