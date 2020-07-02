import React from 'react';
import Order from './Order';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getOrders} from '../actions'

const OrderList = ({orders}) => {
     console.log(orders)
    // const orders = props.orders;
    return(
        <div>
            <div>
                <h1>OrderList Component</h1>
                <span>here should be displayed all the orders made so far</span>
            </div>
            {
                orders.map((order,i) =>{
                    return (<Order 
                        key={i} 
                        id={orders[i].id} 
                        productName={orders[i].productName } 
                        numberOfScoops ={orders[i].numberOfScoops}
                        pricePerScoop ={orders[i].pricePerScoop}
                        totalCost ={orders[i].totalCost}
                        />
                        );
                })
            }
            <div>
                 <Link  to='/addorder'> Add new order </Link>
            </div>
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
       orders: state.orders.orders
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return{
        onGetOrders: () => dispatch(getOrders())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);