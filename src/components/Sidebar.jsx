'use client';
import { faChartSimple, faFile, faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'; 
import Link from 'next/link';

const Sidebar = ({ setActiveComponent }) => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className="flex flex-col pt-4 lg:flex-row min-h-[calc(100vh-66px)]">
      <div className="w-full lg:w-64 bg-white shadow-md">
        <div className="p-4 space-y-3">
          <div
            onClick={() => { setActiveComponent('dashboard'); setActiveMenu("/dashboard"); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-r-3xl cursor-pointer transition-colors ${
              activeMenu === "/dashboard" ? "bg-gray-100 text-indigo-600" : "hover:bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={faChartSimple} className="text-xl" />
            <span>Dashboard</span>
          </div>

          <div
            onClick={() => { setActiveComponent('centerScreen'); setActiveMenu("/centerScreen"); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-r-3xl cursor-pointer transition-colors ${
              activeMenu === "/centerScreen" ? "bg-gray-100 text-indigo-600" : "hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon icon={faMedal} className="text-xl" />
            <span>Skill Test</span>
          </div>

          <div
            onClick={() => { setActiveComponent('internship'); setActiveMenu("/internship"); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-r-3xl cursor-pointer transition-colors ${
              activeMenu === "/internship" ? "bg-gray-100 text-indigo-600" : "hover:bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={faFile} className="text-xl" />
            <span>Internship</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
