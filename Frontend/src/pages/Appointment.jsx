import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
//import {DoctorContext} from "../contexts/DoctorContext";
import { doctors } from "../assets/asset";

export default function Appointment() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //const {doctors} = useContext(DoctorContext)
  return (


    <>
      <div>
      {/* filtering based on there speciality remain */}
    </div >
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-bold"> Consult With Top Doctors</h1>
        <p className="text-gray-600">Simply browse through our extensive lists</p>
        {/* slicing only the first 4 items from the object */}
        {doctors.map((item, index) => (
          <div className="border border-blue-200 rounded-xl overflow-hidden ">
            <img className='bg-blue-50' src={item.image} alt="d1" />
            <div className=" p-4" >
              <div className="flex items-center gap-2 text-sm text-center text-orange-700 ">
                <p className="w-2 h-2 bg-orange-600 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-800 text-lg font-medium">{item.name}</p>
            </div>

          </div>
        ))}
      </div>
    </>


  );
}