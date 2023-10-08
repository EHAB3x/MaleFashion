import { useSelector } from 'react-redux'
import './CSS/Profile.css'
import React, { useEffect, useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import axios from 'axios';
const Profile = () => {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [id, setId] = useState('');
    const token= useSelector(state => state.user.token);

    useEffect(()=>{
        fetch(`https://civet-top-actively.ngrok-free.app/api/admin/users/${window.localStorage.getItem('id')}`, {
            method: "get",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
              'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token, 
            }),
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.image)
                setImage(data.data.image)
                setName(data.data.name)
                setAddress(data.data.address)
                setPhone(data.data.phone)
                setMail(data.data.email)
                setId(data.data.id)
            })
            .catch((err) => console.log(err));
    },[token])

    const update = ()=>{
        axios.patch(`https://civet-top-actively.ngrok-free.app/api/profile/${id}`,{
            name : name,
            address: address,
            phone: phone,
            email: mail
        },{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token,   
            }
        })
    }
  return (
    <div className='prof'>
        <div className="image">
            <img src={`https://civet-top-actively.ngrok-free.app${image}`} alt="Account Pic" />
        </div>

        <div className="details">
            <Card color="transparent" shadow={false}>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" defaultValue={name} autoComplete='off' onChange={(e)=> setName(e.target.value)}/>
                    <Input size="lg" label="Address" defaultValue={address} autoComplete='off' onChange={(e)=> setAddress(e.target.value)}/>
                    <Input size="lg" label="Phone" defaultValue={phone} autoComplete='off' onChange={(e)=> setPhone(e.target.value)}/>
                    <Input size="lg" label="E-mail" defaultValue={mail} autoComplete='off' onChange={(e)=> setMail(e.target.value)}/>
                    </div>
                    <Button className="mt-6" fullWidth onClick={()=>update()}>
                        Update
                    </Button>
                </form>
            </Card>
        </div>
    </div>
  )
}

export default Profile