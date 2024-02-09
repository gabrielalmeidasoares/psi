"use client";
import React from "react";


import TableOne from "../Tables/TableOne";



const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 ">
      <div className=" flex p-3  flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-40 bg-white w-5/6 md:w-full rounded-md">
        <p>Proxima consulta</p>
        <br />
        <h1> 15 FEV às 08:00</h1>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 ">
        
        
        <div className="col-span-12 xl:col-span-8 ">
          <TableOne />
        </div>
        
      </div>
    </>
  );
};

export default ECommerce;
