import React from 'react';
import './CSS/SignUp.css';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import'./CSS/SignUp.css'

const SignUp = () => {
  const google = ()=>{
    window.open('https://civet-top-actively.ngrok-free.app/api/login/google',"_blank","width=400,height = 400,left=500,top=500")
    
  }
  return (
    <Card className='py-5 sign_up' color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" autoComplete='off'/>
          <Input size="lg" label="Email" autoComplete='off'/>
          <Input size="lg" label="Phone" autoComplete='off'/>
          <Input type="password" size="lg" label="Password" autoComplete='off'/>
        </div>
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Button className="mt-6" fullWidth onClick={()=>google()}>
          Google
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  )
}

export default SignUp