import React, { useEffect, useState } from 'react'
import './productPage.css'
import { useParams } from 'react-router-dom'
import {Button,} from "@material-tailwind/react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { cartNumber } from '../../RTK/Slicces/Cart';
const ProductPage = () => {
    const {productId} = useParams({});
    const [product , setProduct] = useState({})
    const [id , setId] = useState(0)
    const [image , setImage] = useState('');
    const [sizes , setSizes] = useState([]);
    const [colors , setColors] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const token= useSelector(state => state.user.token);
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch(`https://civet-top-actively.ngrok-free.app/api/product/${productId}`,{
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
              'Content-Type': 'application/json',
            }),
        })
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setId(data.id)
            setImage(data.images[0].image_url);
            setSizes(data.sizes);
            setColors(data.colors);
        });
    },[productId]);
    
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const addToCart = () => {
        axios.post(`https://civet-top-actively.ngrok-free.app/api/cart`,{
            product_ids :id,
        },{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token,   
            }
        }).then(data => dispatch(cartNumber(data.data.data.id)))
    }
    
  return (
    <div className='productPage'>
            <div className="left">
                <img src={`https://civet-top-actively.ngrok-free.app${image}`} alt="product_image" />
            </div>

            <div className="right">
                <h2>{product.title}</h2>
                <p>{product.description}.</p>
                <div className="size">
                    <h3>Sizes:</h3>
                    <div className="sizes">
                        {sizes.map((size,ind) => (
                            <span key={ind} className={`sizeType ${selectedSize === size.size ? 'sizeSelected' : ''}`} onClick={() => handleSizeClick(size.size)}>
                                {size.size}
                            </span>
                        ))}
                    </div>

                </div>
                <div className="colors_container">
                    <h3>Colors:</h3>
                    <div className="colors">
                        {colors.map((color,ind) => (
                            <span key={ind} className={` ${selectedColor === color.color ? 'colorSelected' : ''}`} onClick={() => handleColorClick(color.color)} style={{backgroundColor:`${color.color}`}}>
                            </span>
                        ))}
                    </div>
                </div>
                <h3>{product.price}$</h3>
                <Button className="mt-6" fullWidth onClick={()=> addToCart()}>
                    Add To Cart
                </Button>
            </div>
    </div>
  )
}

export default ProductPage