import React from 'react';
import './css/ExtraLinks.css';
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HeartIcon,
    ShoppingBagIcon,
    UserIcon,
  } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
const ExtraLinks = () => {
    const labelProps = {
        variant: "small",
        color: "blue-gray",
        className:
          "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
      };
  return (
      <div className="absolute bottom-0 right-0 speed-dial">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <Link to={'/fav'}>
                <HeartIcon className="h-5 w-5" />
                <Typography {...labelProps}>Favourites</Typography>
              </Link>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <Link to={'/cart'}>
                <ShoppingBagIcon className="h-5 w-5" />
                <Typography {...labelProps}>Cart</Typography>
              </Link>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <Link to={'/profile'}>
                <UserIcon className="h-5 w-5" />
                <Typography {...labelProps}>Profile</Typography>
              </Link>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
  )
}

export default ExtraLinks