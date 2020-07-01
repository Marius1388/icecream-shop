import React from 'react';
import Order from './Order';
import {connect} from 'react-redux'

import {getOrders,deleteOrder,editOrder} from '../actions'

const OrderList = props => {
    console.log(props)
    const orders = props.orders;
    return(
        <div>
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
       orders: state.orders 
    }
 }

export default connect(mapStateToProps, {getOrders,deleteOrder,editOrder})(OrderList);