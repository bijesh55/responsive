import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from '@mantine/hooks';
import { Button, Drawer } from '@mantine/core'; 
import { LayoutDashboard, BuildingStore } from "tabler-icons-react";
import { MdSupervisorAccount } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Demo from '../Component/common/Table';
const Store = () => {
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
    <div className='h-screen w-screen '>
       <nav className="flex  justify-between ">
        <h1 className="pt-12 lg:pt-20 lg:pl-24 pl-12 text-title font-semibold text-2xl lg:-mt-4 md:mt-2">
          Store
        </h1>
        <div className="componend flex justify-evenly items-start mt-12 w-2/3 lg:ml-64 lg:mt-16">
          <div className="form-field md:ml-24  w-1/3 lg:h-12 md:h-12 text-center justify-center item-center bg-primary border-solid rounded-full hidden lg:block cursor-pointer lg:pl-12 lg:text-4xl md:block  lg:w-72">
            <div className=" h-24    text-center flex md:w-40 md:h-14 md:pt-2"><span className='ml-8 pt-1  text-2xl'><IoMdAdd /></span>
             <h1 className='ml-8 md:ml-4 text-2xl'>Store</h1>
            </div>
            
          </div >
          <div className="flex justify-between lg:w-1/3 ml-40 md:ml-40">
          <h className="lg:text-3xl  text-3xl  bg-primary rounded-full lg:size-16 md:size-12 lg:ml-24 item-center flex justify-center lg:pt-4 cursor-pointer lg:px-2 md:pt-2">
            <IoIosNotifications />
          </h>
          <p className="text-3xl md:text-2xl bg-primary rounded-full lg:size-16 md:size-12 item-center  justify-center  cursor-pointer hidden md:block lg:block lg:mr-8 md:ml-8 pl-4 pt-2 lg:pt-4">
            <IoPerson />
          </p>
          <p  onClick={open} aria-label="Toggle navigation"
            className='cursor-pointer'
            ><GiHamburgerMenu size={"24"} className='ml-2 lg:hidden md:hidden'/> {opened}</p>  </div>
        </div>
          <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Track Inventory "
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        
      >
           <div className="form-field   h-12 text-center justify-center item-center bg-primary border-solid rounded-full cursor-pointer ml-2">
            <div className=" h-16  border-blue-40   text-center text-xl flex  pt-2"><span className='ml-8 mt-2 text-2xl'><IoMdAdd /></span>
             <h1 className='ml-8'>Add Store</h1>
            </div>
            
          </div >
          <div className='text-xl mt-4 ml-6 flex'>
          < IoPerson className='rounded-full bg-primary text-4xl'/><h1 className='text-second font-semibold ml-4'>Profile</h1> </div>
          {menuItem.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
          
            <div className=" flex justify-center items-center  mt-8 -ml-36">
              <div className="icon ">{item.icon}</div>
              <div    className="name  text-title font-semibold text-xl ml-4">{item.name}</div>
            </div>
          </a>
        ))}
      </Drawer>
      </div>
        
      </nav>
      <div>
        <Demo/>
      </div>
    </div>
  );
};

export default Store;