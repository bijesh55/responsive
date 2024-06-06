
import { LayoutDashboard, BuildingStore } from "tabler-icons-react";
import { MdSupervisorAccount } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Sidebr from "./sidebr";

const Sidebar = ({children}) => {
  const[isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen)
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={24} strokeWidth={2} color={"#405dbf"} />,
    },
    {
      path: "/dashboard/supervisor",
      name: "Supervisor",
      icon: <MdSupervisorAccount size={24} color={"4051bf"} />,
    },

    {
      path: "/dashboard/store",
      name: "Store",
      icon: <BuildingStore size={24} strokeWidth={2} color={"#4051bf"} />,
    },
  ];
  return (
    <>
     <Sidebr/>
     {/* <div  style={{width: isOpen ? "100px" : "50px"}}  className= " bg-[#DDD8F1] h-screen  lg-hidden  ">
      <div className="sidebar  flex flex-col items-start justify-center mt-14">
        <div className="top-section">
        <div style={{marginLeft: isOpen ? "50px" : "25px"}} className="text-xl lg:hidden md:hi">
                       <GiHamburgerMenu onClick={toggle} />
                   </div>
          <h1 style={{display: isOpen ? "block" : "none"}}  className="logo font-semibold text-title mt-8 text-xs">
            Track Inventory
          </h1>
            <div className="relative mt-4 lg:hidden md:hidden">
            <input
              type="text"
              placeholder="search by date, product....."
              style={{display: isOpen ? "block" : "none"}} 
              className="w-24 h-8  border-[2px] border-primary rounded-full py-2 px-5 text-sm md:text-lg md:py-3 lg:py-4 md:px-10 lg:px-14 md:w-80 lg:w-96 lg-text-3xl  "
            />
            <span    className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary md:text-lg p-1 md:p-3 rounded-full flex items-center justify-center -mr-3">
              <IoIosSearch />
            </span>
            </div>
        </div>
        
      
        {menuItem.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className=" flex justify-center items-center pl-16 mt-8 lg:hidden">
              <div className="icon -ml-14 ">{item.icon}</div>
              <div  style={{display: isOpen ? "block" : "none"}}  className="name  text-title font-semibold text-xs">{item.name}</div>
            </div>
          </a>
        ))}
      </div>
      <main>{children}</main>
    </div> */}
    </>
   
  );
};

export default Sidebar;
