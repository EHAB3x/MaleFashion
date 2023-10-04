import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(()=>{
    fetch('https://civet-top-actively.ngrok-free.app/api/product', {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  })
  return (
    <div>Products</div>
  )
}

export default Products