import React, { useEffect, useState } from 'react';
import './css/Sale.css'
import SalePic from "../../Images/product-sale.png";
import { Link } from 'react-router-dom';
const Sale = () => {
    const [day ,setDay] = useState(0)
    const [hours ,setHours] = useState(0)
    const [minutes ,setMinutes] = useState(0)
    const [seconds ,setSeconds] = useState(0)
    
    setInterval(()=>{
            const today= new Date();
            const day = -((today.getDay()+ 1) - 30);
            const hours = -((today.getHours()+ 1) - 24);
            const minutes = -(today.getMinutes() - 60);
            const seconds = -(today.getSeconds() - 60);
            setDay(day);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            
        },1000)
  return (
    <div className='sale'>
        <div className="left">
            <h3>Clothing Hot</h3>
            <h3 className='middle'>Shoe Collection</h3>
            <h3>Accessories</h3>
        </div>
        <div className="mid">
            <img src={SalePic} alt="salePic" />
            <span className='discount'><span>Sale Of </span> $29.99</span>
        </div>
        <div className="right">
            <span>deal of the week</span>

            <h2>Multi-pocket Chest Bag Black</h2>

            <div className="clock">
                <div className="days">
                    <h4>Days</h4>
                    <span>{day}</span>
                </div>
                
                <div className="hours">
                    <h4>Hours</h4>
                    <span>{hours}</span>
                </div>
                
                <div className="minutes">
                    <h4>Minutes</h4>
                    <span>{minutes}</span>
                </div>
                
                <div className="seconds">
                    <h4>Seconds</h4>
                    <span>{seconds}</span>
                </div>
            </div>
            
            <Link className='shopping' to="/products">SHOP NOW</Link>
        </div>
    </div>
  )
}

export default Sale