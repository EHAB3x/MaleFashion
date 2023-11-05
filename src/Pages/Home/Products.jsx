import React, { useEffect, useState } from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
import './css/Products.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
            <Link to={`/products/${product.id}`} className="box" key={product.id}>
              <div className="image">
                <img src={`https://civet-top-actively.ngrok-free.app${product.images[0]}`} alt={product.title} />
              </div>

              <div className="desc">
                <div className="fav">
                  <h4>{product.title}</h4>
                  
                </div>
                <p className='rating'>         
                </p>
                <p className='price'>${product.price}</p>
              </div>

            </Link>
          )
        })}
      </Container>
    </div>
  )
}

export default Products