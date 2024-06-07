
import { LayoutDashboard, BuildingStore } from "tabler-icons-react";
import { MdSupervisorAccount } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Sidebr = () => {
  
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
      name: "Store",
      icon: <BuildingStore size={44} strokeWidth={2} color={"#4051bf"} />,
    },
  ];
  return (
    <>

     <div   className= " bg-[#DDD8F1] h-screen   w-60  lg:block hidden md:block">
      <div className="sidebar  flex flex-col items-start justify-center mt-14">
        <div className="top-section">
          <h1   className="logo  text-title text-2xl ml-14">
            Track Inventory
          </h1>
          
        </div>
        
      
        {menuItem.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className=" flex justify-center items-center pl-16 mt-8">
              <div className="icon ">{item.icon}</div>
              <div    className="name  text-title font-semibold text-xl ml-4">{item.name}</div>
            </div>
          </a>
        ))}
      </div>
    
    </div>
    </>
   
  );
};

export default Sidebr;
