import './css/Footer.css'
import React from 'react'
import logo from '../Images/white_logo.png'
import payment from '../Images/payment.png'
import { Link } from 'react-router-dom'

import {HeartIcon} from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer>
        <div className="content">
            <div className="one">
                <img className='logo' src={logo} alt="logo" />
                <p>The customer is at the heart of our unique business model, which includes design.</p>
                <img className='payment' src={payment} alt='payment'/>
            </div>

            <div className="two">
                <h3>SHOPPING</h3>
                <ul>
                    <li><Link to={'/products/clothes'}>Clothing Store</Link></li>
                    <li><Link to={'/products/shoes'}>Trending Shoes</Link></li>
                    <li><Link to={'/products/accessories'}>Accessories</Link></li>
                    <li><Link to={'/products/clothes'}>Sale</Link></li>
                </ul>
            </div>

            <div className="three">
                <h3>SHOPPING</h3>
                <ul>
                    <li><Link to={'/products/contact'}>Contact Us</Link></li>
                    <li><Link to={'/products/payment'}>Payment Methods</Link></li>
                    <li><Link to={'/products/delivary'}>Delivary</Link></li>
                    <li><Link to={'/products/return'}>Return & Exchanges</Link></li>
                </ul>
            </div>

            <div className="four">
                <h3>NEWLETTER</h3>
                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                <form action="">
                    <input type="mail" name="mail" id="mail" placeholder='Your email'/>
                </form>
            </div>
        </div>
        <div className="copy_right">
            <p>Copyright © 2023-2020 All rights reserved | This template is made with<HeartIcon color='red' className="h-5 w-5"/>by<span>E & I</span></p>
        </div>
    </footer>
  )
}

export default Footer