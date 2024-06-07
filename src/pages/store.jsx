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
        <h1 className="pt-24 pl-24 text-title font-semibold text-2xl -mt-4">
          Store
        </h1>
        <div className="componend flex justify-evenly items-start mt-16  mb-12 w-1/2">
          <div className="form-field   w-1/3 h-16 text-center justify-center item-center bg-primary border-solid rounded-full hidden lg-block cursor-pointer">
            <div className=" h-16  border-blue-40   text-center text-xl flex  pt-2 "><span className='ml-8 text-2'><IoMdAdd /></span>
             <h1 className='ml-8'>Store</h1>
            </div>
            
          </div >
          <div className="flex justify-end w-1/3">
          <h className="text-4xl   bg-primary rounded-full size-16 mr-24 item-center flex justify-center pt-4 cursor-pointer">
            <IoIosNotifications />
          </h>
          <p className="text-3xl bg-primary rounded-full size-16 item-center  justify-center pt-4 cursor-pointer hidden lg-hidden">
            <IoPerson />
          </p>
          <p  onClick={open} aria-label="Toggle navigation"
            className='cursor-pointer'
            ><GiHamburgerMenu size={"24"} className='ml-8  lg:hidden'/> {opened}</p>  </div>
        </div>
          <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Track Inventory "
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        
      >
           <div className="form-field   h-12 text-center justify-center item-center bg-primary border-solid rounded-full cursor-pointer ml-2">
            <div className=" h-16  border-blue-40   text-center text-xl flex  pt-2"><span className='ml-8 text-2xl'><IoMdAdd /></span>
             <h1 className='ml-8'>Add Store</h1>
            </div>
            
          </div >
          {menuItem.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
          
            <div className=" flex justify-center items-center  mt-8 -ml-12">
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