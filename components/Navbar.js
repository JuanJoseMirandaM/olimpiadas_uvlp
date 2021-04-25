import React, { Fragment, useState } from 'react'
import Head from 'next/head';

export default function Navbar() {
  const [navbarOpen, setnavbarOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-black bg-opacity-25 shadow-xl z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <a href="#" className="flex items-center py-5 px-2 text-white">
                <svg className="h-6 w-6 mr-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="font-bold">OLIMPIADAS MEDICAS UVLP</span>
              </a>
            </div>
            <div className="flex md:hidden items-center text-white">
              <button 
                className="mobile-menu-button"
                onClick={() => setnavbarOpen(!navbarOpen)}
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className={"md:flex flex-col md:flex-row " + (navbarOpen?"flex":"hidden")}>
          <a href="#" className="py-5 px-3 text-gray-200 hover:text-white">Acerca de</a>
            <a href="#" className="py-5 px-3 text-gray-200 hover:text-white">Olimpiadas</a>
            <a href="#" className="py-5 px-3 text-gray-200 hover:text-white">Resultados</a>
            {/* <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a> */}
          </div>    
        </div>
      </div>
    </nav>
  );
}