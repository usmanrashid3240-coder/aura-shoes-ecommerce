

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="shadow-md">
      <nav className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900
                       p-4 flex justify-center items-center shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-800 flex items-center">
            Aura Shoes
            <img
              src="/green-shoes-logo.png" 
              alt="Aura Shoes Logo"
              className="w-[80px] h-[80px] ml-2"
            />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
