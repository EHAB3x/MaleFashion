import React from 'react'
import { Link } from 'react-router-dom'
import './css/Category.css'

const Category = (props) => {
  return (
    <div className={`category ${props.link}`}>
        <img src={props.img} alt='banner' />
        <div className="details">
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
            <Link to={`/product/${props.link}`}>SHOP NOW</Link>
        </div>
    </div>
  )
}

export default Category