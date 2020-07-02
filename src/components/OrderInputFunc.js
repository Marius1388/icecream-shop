import React from 'react';

import { Button, Form, Label,Input} from 'reactstrap';
import {connect} from 'react-redux'
import {addOrder} from '../actions'
import {products} from '../products'

const OrderInputFunc = ({order, addOrder}) => {
    const {productName,numberOfScoops,totalCost} =order;
    return(
        <div>
           
        <Form onSubmit={this.onSubmit}>
                    
                        <Label for=''> Flavour </Label>
                        <Input  
                            type='select'
                            name= 'productName'
                            id='productName'
                            placeholder='Choose a flavour'
                            onClick={this.onSelect}
                        > 
                             {/* do a map through products to pick one */}
                            
                             {products.map (({_id,name,pricePerScoop}) => (
                                  <option key={_id} value={name} > {name} -- ${pricePerScoop} /scoop</option>
                             ))}
                             
                        </Input>
                                                
                        <Label for="numberOfScoops">Number of scoops </Label>
                        <Input type='number'
                            name= 'numberOfScoops'
                            id='numberOfScoops'
                            placeholder='How many'
                            onChange={this.onChange}
                        ></Input>
                        
                       
                                                
                        <Label for="pricePerScoop">Price per scoop </Label>
                        <Input type='number'
                            name= 'pricePerScoop'
                            id='pricePerScoop'
                            placeholder={this.state.order.pricePerScoop}
                            onChange={this.onChange}
                        ></Input>
                        
                         
                        <Button
                            color='dark'
                            style={{marginTop:'2rem'}}
                            block
                            onClick={() => addOrder(order)}
                        >Add Order</Button>
                    
                </Form>
            
     </div>
     )

}



const mapDispatchToProps= dispatch => ({
    addOrder: order =>dispatch(addOrder(order))
}) 

export default connect(null, mapDispatchToProps)(OrderInputFunc)