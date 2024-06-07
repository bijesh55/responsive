import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from '@mantine/hooks';
import { Button, Drawer } from '@mantine/core'; 
import { LayoutDashboard, BuildingStore } from "tabler-icons-react";
import { MdSupervisorAccount } from "react-icons/md";
import Sidebr from './sidebr';
import Sidebar from './sidebar';
const NavBar = () => {
  const [opened, { open,close,toggle }] = useDisclosure(false);
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={44} strokeWidth={2} color={"#405dbf"} />,
    },
    {
      path: "/dashboard/supervisor",
      name: "Supervisor",
      icon: <MdSupervisorAccount size={44} color={"4051bf"} />,
    },

    {
      path: "/dashboard/store",
      name: "Store " ,
      icon: <BuildingStore size={44} strokeWidth={2} color={"#4051bf"}className='-ml-12' />,
    },
  ];
  return (
    
    <div>
      
      <nav className="flex items-center justify-between mt-12 px-2 w-full">
        <div className="w-1/3 text-second lg:ml-14 text-xl ml-4 font-semibold">
          <p className=" md:text-xl lg:text-2xl">Dashboard</p>
        </div>

        <div className="gap-2 flex  md:gap-12 lg:gap-20 mr-8 ">
          <div className="relative">
            <input
              type="text"
              placeholder="search by date, product....."
              className="w-24  border-[2px] border-primary rounded-full py-2 px-5 text-sm md:text-lg md:py-3 lg:py-4 md:px-10 lg:px-14 md:w-80 lg:w-96 lg-text-3xl hidden lg:block md:block"
            />
            <span className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary md:text-lg p-1 md:p-3 rounded-full  items-center justify-center hidden lg-block">
              <IoIosSearch />
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-8  lg:gap-12">
            <span className=" bg-primary text-xl md:text-xl p-2 md:p-4 flex items-center justify-center rounded-full">
              <IoIosNotifications />
            </span>
            <span className=" bg-primary text-xl md:text-xl p-2 md:p-4  items-center justify-center rounded-full hidden lg:block md:block">
              <IoPerson />
            </span>
            <p  onClick={open} aria-label="Toggle navigation"
            className='cursor-pointer'
            ><GiHamburgerMenu size={"24"} className='-mr-4 lg:hidden md:hidden'/> {opened}</p>  </div>
           
        </div>
          <>
      <Drawer
        opened={opened}
        onClose={close}
        title=""
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        
      >
        <h1 className='text-2xl pb-8 text-second '>Track Inventory</h1>
       <div className="relative">
            <input
              type="text"
              placeholder="search by date, product....."
              className="w-80  border-[2px] border-primary rounded-full py-2 px-5 text-sm  "
            />
            <span className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary md:text-lg p-1 md:p-3 rounded-full flex items-center justify-center mr-8">
              <IoIosSearch />
            </span>
          </div>
          {menuItem.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className=" flex justify-center items-center  mt-8">
              <div className="icon -ml-36">{item.icon}</div>
              <div className="name  text-title font-semibold text-xl ml-4">{item.name}</div>
            </div>
          </a>
        ))}
      </Drawer>
      

    </></nav>
    
    </div>
  );
};

export default NavBar;