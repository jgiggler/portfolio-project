import React from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({item}) {
    // let price = (parseInt(product.price)).toLocaleString('en-US',{
    //     style: 'currency',
    //     currency: 'USD'
    // });
    return (
        <>
        <tr>
            <td>{item.company}</td>
            <td>{item.product}</td>
            <td>{item.price.toLocaleString('en-US', {style: 'currency', currency: "USD"})}</td>
            <td><ProductQuantity></ProductQuantity></td>
        </tr>
        </>
    );
}

export default ProductRow;