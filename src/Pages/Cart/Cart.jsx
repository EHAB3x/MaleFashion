import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Cart = () => {
    const token= useSelector(state => state.user.token);
    const cartId= useSelector(state => state.cart);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://civet-top-actively.ngrok-free.app/api/cart`, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token, 
            }),
        })
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          
        })
        .catch(err=> console.log(err));
        

        
    },[token])

    const deleteProduct = (e)=>{
      fetch(`https://civet-top-actively.ngrok-free.app/api/cart/${cartId}`,{
        "product_ids": e.products[0].id
      },{
        headers: new Headers({
          method:"DELETE",
          credentials: 'include',
          "ngrok-skip-browser-warning": "69420",
          'Authorization': 'Bearer '+ token, 
          'Content-Type': 'application/json',
        })
      }).then(res => res.json())
      .then(data => console.log(data))
      console.log(cartId);
      console.log(e.products[0].id);
    }
  return (
    <div className='cart'>
      <div className="left">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,ind)=>{
              return(
                <tr key={ind}>
                  <td className='image'><img src={`https://civet-top-actively.ngrok-free.app${product.products[0].images[0].image_url}`} alt="" /><div>{product.products[0].title}<span>$ {product.products[0].price}</span></div></td>
                  {/*------ increamental quant API Waiting-----*/}
                  <td><div className="quant"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg><span>{product.products[0].quantity}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></div></td>
                  <td className='font-bold'>$ <span className='calc'>{product.products[0].price}</span></td>
                  <td onClick={()=> deleteProduct(product)} className="remove"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="right">
        <h2>Discount Codes</h2>
        <div className='field'>
          <input type="text" name="code" id="code" placeholder='Coupon Codes' />
          
          <button>Apply</button>
        
        </div>

        <div className="total">
          <h4>Car Total</h4>

          <div className="money">
            <h6>Total</h6>
            <span>$ 150</span>
          </div>

          <div className="money">
            <h6>After Discount</h6>
            <span>$ 120</span>
          </div>

          <button className='checkout'>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart