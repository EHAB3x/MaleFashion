import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { addUser } from '../../RTK/Slicces/User';
import './CSS/SignIn.css'


const SignIn = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' }).slice(0, 3);
  console.log(month)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit =()=>{
        if(email === '' || password === ''){
            swal("You Have To Fill All Fields");
        }else{
            axios.post('https://civet-top-actively.ngrok-free.app/api/login',{
            email,
            password
            })
            .then(data => {
                window.localStorage.setItem('id',data.data.user.id);
                document.cookie = `username=${JSON.stringify(data.data)}; expires=Thu, 30 ${month} 2023 12:00:00 UTC; path=/`;
                navigate('/');
            })
            .catch(()=>swal("Email Or Password Is Incorrect"));
        }
    }
  return (
    <Card className='py-5 sign_in' color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Log In.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input type="password" size="lg" label="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <Button className="mt-6" onClick={()=> submit()} fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't Have Account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  )
}

export default SignIn