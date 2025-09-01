import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from "lucide-react";
import { Navigate } from 'react-router-dom';

const categories = [
    {
        name: "Hair Care",
        items: ["Shampoo", "Hair Oil", "Hair Growth Supplements", "Hair Treatments"],
    },
    {
        name: "Fitness & Supplements",
        items: ["Protein Powders", "Vitamins", "Pre & Post Workout", "Weight Management"],
    },
    {
        name: "Homeopathy",
        items: ["All Medicines", "Respiratory Care", "Skin Care", "Pain Relief"],
    },
    {
        name: "Personal Care",
        items: ["Skin Care", "Oral Care", "Body Care", "Men's Grooming"],
    },
    {
        name: "Elderly Care",
        items: ["Adult Diapers", "Walking Aids", "Supplements", "Support Belts"],
    },
];


function Medicine() {
    const [active, setActive] = useState(null);
    return (
        <>
         {/* NAVBAR FOR MEDICINES PAGE */}
        <nav className="bg-white shadow-md relative">
            <div className="max-w-7xl mx-auto px-6 flex items-center space-x-8 h-14">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="relative group"
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <button className="flex items-center text-gray-700 font-medium hover:text-red-500">
                            {cat.name}
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        {/* Dropdown */}
                        {active === i && (
                            <div className="absolute left-0 top-12 w-[250px] bg-white shadow-xl rounded-xl p-4 z-50">
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {cat.items.map((item, j) => (
                                        <li
                                            key={j}
                                            className="hover:text-red-500 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
                <div>search bar</div>
                <a href="/cart"><div onClick={()=> (Navigate('/cart'))} className='cursor-pointer'> Cart</div></a>
                <button className="bg-orange-600 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-orange-700 transition-colors">
            Quick Order
          </button>

            </div>
            
        </nav>
        </>
    );
}

export default Medicine
