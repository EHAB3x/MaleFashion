import Category from './Category';
import './css/Categories.css';
import React from 'react'
import bannerOne from '../../Images/banner-1.jpg';
import bannerTwo from '../../Images/banner-2.jpg';
import bannerThree from '../../Images/banner-3.jpg';

const Categories = () => {
  return (
    <div className='categories'>
        <Category title="Clothing" date="Collections 2030" img={bannerOne} link="clothes"/>
        <Category title="Accessories" img={bannerTwo}  link="accessories"/>
        <Category title="Shoes Spring" date="2030" img={bannerThree}  link="shoes"/>
    </div>
  )
}

export default Categories