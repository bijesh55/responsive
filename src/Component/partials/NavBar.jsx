import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from '@mantine/hooks';
import {  Drawer } from '@mantine/core'; 
const NavBar = () => {
  const [opened, { open,close,toggle }] = useDisclosure(false);
  
  return (
    <div>
      <nav className="flex items-center justify-between mt-12 px-2 lg:mr-10">
       

        <div className="w-1/3 text-second lg:ml-14 text-">
          <p className=" md:text-xl lg:text-2xl">Dashboard</p>
        </div>

        <div className="flex gap-2  md:gap-12 lg:gap-20">
          <div className="relative">
            <input
              type="text"
              placeholder="search by date, product....."
              className="w-24  border-[2px] border-primary rounded-full py-2 px-5 text-sm md:text-lg md:py-3 lg:py-4 md:px-10 lg:px-14 md:w-80 lg:w-96 lg-text-3xl "
            />
            <span className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary md:text-lg p-1 md:p-3 rounded-full flex items-center justify-center">
              <IoIosSearch />
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-8  lg:gap-12">
            <span className=" bg-primary text-xl md:text-2xl p-2 md:p-4 flex items-center justify-center rounded-full">
              <IoIosNotifications />
            </span>
            <p  onClick={open} aria-label="Toggle navigation" >clicks {opened ? 'true' : 'false'}</p>  </div>
            

           
        </div>
      </nav>
      {/* <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        <div  style={{width: opened ? "100px" : "50px"}}  className= " bg-[red]   "></div>
      </Drawer> */}
          <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
    </div>
  );
};

export default NavBar;