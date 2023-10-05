import React, { useEffect, useState } from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
import './css/Products.css'
import { Link } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [fav, setFav]= useState([]);
  useEffect(()=>{
    fetch('https://civet-top-actively.ngrok-free.app/api/product', {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
      // const fav = document.getElementsByTagNameNS("div");
      // setFav(fav);
    },[])
    console.log(fav);
  return (
    <div className='products'> 
      <h2>Products</h2>
      <Container>
        {products.map((product)=>{
          return(
            <div to={`/products/${product.id}`} className="box" key={product.id}>
              <div className="image">
                <img src={`https://civet-top-actively.ngrok-free.app${product.images[0]}`} alt={product.title} />
              </div>

              <div className="desc">
                <div className="fav">
                  <h4>{product.title}</h4>
                  <div id="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  </div>
                </div>
                <p className='rating'>         
                </p>
                <p className='price'>${product.price}</p>
              </div>

            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default Products