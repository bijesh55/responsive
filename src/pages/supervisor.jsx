import React from 'react';

import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Demo from '../Component/common/Table';
const Supervisor = () => {
  return (
    <div className='h-screen w-screen '>
       <nav className="flex  justify-between ">
        <h1 className="pt-24 pl-24 text-title font-semibold text-2xl -mt-4">
          Supervisor
        </h1>
        <div className="componend flex justify-evenly items-start mt-16  mb-12 w-1/2">
          <div className="form-field   w-1/3 h-16 text-center justify-center item-center bg-primary border-solid rounded-full">
            <div className=" h-16  border-blue-40   text-center text-2xl flex  mt-4 "><span className='ml-8'><IoMdAdd /></span>
             <h1 className='ml-8'>Add Supervisor</h1>
            </div>
            
          </div >
          <div className="flex justify-end w-1/3">
          <h className="text-4xl   bg-primary rounded-full size-16 mr-24 item-center flex justify-center pt-4 cursor-pointer">
            <IoIosNotifications />
          </h>
          <p className="text-3xl bg-primary rounded-full size-16 item-center flex justify-center pt-4 cursor-pointer">
            <IoPerson />
          </p></div>
        </div>
      </nav>
      <div>
        <Demo/>
      </div>
    </div>
  );
};

export default Supervisor;