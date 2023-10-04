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

const SignUp = () => {
  return (
    <Card className='py-5' color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" autoComplete='off'/>
          <Input size="lg" label="Email" />
          <Input size="lg" label="Phone" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6" fullWidth>
          Register
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