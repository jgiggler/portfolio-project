import React from 'react';
import ProductRow from '../components/ProductRow.js'

function OrderPage({products}) {
  
  return (
    <>
      <h2>Order Now</h2>
        <article class="order_form">
            <p class="contact_reason">You can select the quantity of a product by adjusting the + and - icons
             for each product.</p>
            
               <table>
                        <caption>Products Available</caption>
                        <thead>
                            <tr>
                                <td>Company</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>How Many?</td>
                            </tr>
                        </thead>
                        <tbody>
                          {products.map((product, index) => 
                            <ProductRow item={product} key={index} />
                              )}
                        </tbody>
                      </table>
                      
                </article>               
    </>
  );
}

export default OrderPage;