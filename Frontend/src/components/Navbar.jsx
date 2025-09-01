import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  
  // Function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Strip */}
      <div className="bg-gray-900 border-b-red-600">
        <div className=" text-white border-2px-orange-700 py-2 text-xs max-w-8xl mx-auto px-4 sm:px-6 flex justify-center items-center">
          <span>
           Timely Doctor's Appointments • Free Delivery • 100% Authentic Medicines • Exciting Offers & more.
            <Link to="/" className="hover:underline">
              <span className='text-sm sm:text-base text-orange-600 ml-1'>Explore</span>
            </Link>
            
          </span>
          <span className='flex translate-x-40 font-bold text-l text-red-500'> Special Feauture Availabe !!</span>
        </div>
        
      </div>

      <nav className=" bg-gradient-to-r from-cyan-50 to-blue-100 shadow px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex flex-col mb-3 sm:mb-0">
          <span className="text-xl sm:text-2xl font-bold text-orange-500"><span className='font-extrabold text-4xl text-red-700 '>+</span>CureMed</span>
          <span className="text-xs text-gray-500 -mt-1 px-5">   Caring Beyond Cure</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 sm:mt-0">
          <Link 
            to="/medicine" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/medicine') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            MEDICINES
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/medicine') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          <Link 
            to="/labtest" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/labtest') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            LABTEST
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/labtest') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          <Link 
            to="/appointment" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/appointment') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            APPOINTMENTS
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/appointment') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          <Link 
            to="/medbot" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/special') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            MEDICAL ASSISTANT
            
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/special') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          

          <Link 
            to="/pred" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/special') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            DISEASE PREDICTOR
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/special') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          <Link 
            to="/about" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/about') 
                ? 'text-orange-600 underline' 
                : 'text-gray-700 hover:text-orange-600 hover:underline'
            }`}
          >
            ABOUT US
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/about') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          <Link 
            to="/login" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/login') 
                ? 'text-orange-600' 
                : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            Login 
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/login') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>

          <Link 
            to="/reg" 
            className={`text-sm font-medium relative py-2 ${
              isActiveLink('/login') 
                ? 'text-orange-600' 
                : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            Register 
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 ${
              isActiveLink('/reg') ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            } transition-opacity`}></span>
          </Link>
          
          {/* Need Help Button */}
          <button className="bg-orange-600 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-orange-700 transition-colors">
            Need Help?
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar