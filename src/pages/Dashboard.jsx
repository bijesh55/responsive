import React from "react";
import { LiaStoreAltSolid } from "react-icons/lia";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillFilter } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Tavlur from "../Component/common/Tables2";
import NavBar from "../Component/partials/NavBar";
import Sidebar from "../Component/partials/sidebar";
const Dashboard = () => {
  return (
    <div className="w-screen h-screen">
   
     <NavBar/>
    
      <div className="content mt-9 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 pl-4 pr-4 lg:pl-4 lg:pr-4 md:pl-4 md:pr-4 ">
        <div
          className="Total-store border-2 border-grey  flex justify-center items-center shadow-xl rounded-md decoration-primary
        w-ful h-24 lg:w-full lg:h-40 md:w-full md:h-24  "
        >
          <span className="  bg-orange-300 flex  justify-center  items-center rounded-full h-14 text-center  pt-2 w-14 border-4 text-4xl pb-2 lg:border-8 lg:w-24 lg:h-24 lg:text-6xl md:w-16 md:h-16 mr-4">
            <LiaStoreAltSolid />
          </span>
          <div className=" bg-orange ">
            <h1 className=" text-orange-300  lg:text-2xl md:text-base text-sm font-bold">
              Total Store
            </h1>
            <p className=" text-orange-300 lg:text-6xl md:text-4xl text-4xl font-bold">24</p>
          </div>
        </div>
        <div className="Total-store border-2 border-grey  flex justify-center items-center shadow-xl rounded-md decoration-primary
        w-full h-24 lg:w-full lg:h-40 md:w-full md:h-24 ">
          <span className=" bg-primary flex  justify-center  items-center rounded-full h-14 text-center  pt-2 w-14 border-4 text-4xl pb-2 lg:border-8 lg:w-24 lg:h-24 lg:text-6xl md:w-16 md:h-16 border-purple-300">
            <MdOutlineProductionQuantityLimits />
          </span>
          <div className="bg-orange ml-4">
            <h1 className=" text-second  lg:text-2xl md:text-base text-sm font-bold">Total Product</h1>
            <p className=" text-second lg:text-6xl md:text-4xl text-4xl font-bold">24</p>
          </div>
        </div>
        <div className="Total-store border-2 border-grey  flex justify-center items-center shadow-xl rounded-md decoration-primary
        w-full h-24 lg:w-full lg:h-40 md:w-full md:h-24  ">
          <span className="  bg-green-200 flex  justify-center  items-center rounded-full h-14 text-center  pt-2  border-4 text-5xl pb-2 lg:border-8 lg:w-24 lg:h-24 lg:text-6xl md:w-16 md:h-16  mr-4">
            <FaUsers />
          </span>
          <div className=" ml-2">
            <h1 className="  text-green-300 lg:text-2xl md:text-base sm:text-sm font-bold">Total User</h1>
            <p className=" text-green-200 lg:text-6xl md:text-4xl text-4xl font-bold">24</p>
          </div>
        </div>
        <div className="Total-store border-2 border-grey  flex justify-center items-center shadow-xl rounded-md decoration-primary
        w-full h-24 lg:w-full lg:h-40 md:w-full md:h-24 lg:hidden">
          <span className="  bg-red-200 flex  justify-center  items-center rounded-full h-14 text-center  pt-2  border-4 text-5xl pb-2 lg:border-8 lg:w-24 lg:h-24 lg:text-6xl md:w-16 md:h-16">
            <FaUsers />
          </span>
          <div className="">
            <h1 className="  text-red-300  lg:text-2xl text-sm md:text-base">
              Total User
            </h1>
            <p className=" text-red-200 lg:text-6xl md:text-4xl text-4xl">24</p>
          </div>
        </div>
      </div> 
      {/* <div className="">
        <h1 className=" text-second  font-bold mt-14 ml-4 text-sm lg:text-3xl">Product with LowStock</h1>
        <div className="flex justify-between w-1/3 mt-4">
          <span className="text-2xl ml-4 text-second"><AiFillFilter/></span>
          <div className="flex justify-between lg:mr-96">
          <h2 className=" bg-primary relative inline-block w-28 rounded-lg pl-4 text-second text-2xl lg:text:">Store</h2>
          <span className="absolute ml-20 pt-3 text-xl cursor-pointer text-second  "><FaChevronDown /></span>
          </div>
        </div>
      </div> */}
    
      {/* <Tavlur/> */}
    </div>
  );
};

export default Dashboard;
