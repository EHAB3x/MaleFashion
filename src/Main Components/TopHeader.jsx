import React, { useEffect, useState } from 'react';
import './css/TopHeader.css';
import { Link } from 'react-router-dom';
import {Menu, MenuHandler, MenuList, MenuItem,Button} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
   
const TopHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(()=>{
        const sign = document.querySelector('#sign');
        if(window.localStorage.getItem('id')){
            sign.style.cssText="display:none";
        }
    })
  return (
    <div className='top_header'>
        <div className="left">
            <p>Free shipping, 30-day or refund guarantee</p>
        </div>
        <div className="right">
            <ul>
                <li id='sign'><Link to={`/signin`}>SIGN IN</Link></li>
                <li><Link to={`/FAQ`}>FAQ</Link></li>
                <li>
                    <Menu animate={{mount: { y: 0 }, unmount: { y: 25 },}}>
                    <MenuHandler>
                        <Button>currency <ChevronDownIcon strokeWidth={2.5} className={`h-3.5 w-3.5 transition-transform ${ openMenu ? "rotate-180" : ""}`}/></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>USD</MenuItem>
                        <MenuItem>EUR</MenuItem>
                        <MenuItem>EGP</MenuItem>
                    </MenuList>
                    </Menu>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopHeader