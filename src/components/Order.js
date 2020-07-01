import React from 'react';

const Order =({ productName, numberOfScoops, pricePerScoop,totalCost }) => {
    
    return (
        <div>
                <tr>
                    <td>{productName}</td>
                    <td>{numberOfScoops}</td>
                    <td>{pricePerScoop}</td>
                    <td>{totalCost}</td>
                </tr>
        </div>
    );
};



export default Order; 