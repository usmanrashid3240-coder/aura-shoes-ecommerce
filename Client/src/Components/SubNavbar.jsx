import React from "react";
import { Link } from "react-router-dom";
import { FaMale, FaFemale, FaChild, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi"; 
import { MdContactMail } from "react-icons/md"; // ✅ Contact Icon Added

const SubNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 text-white shadow-md py-3 px-6 flex items-center justify-center space-x-6">

      {/* 🟢 Men Button */}
      <Link
        to="/home"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <FaMale /> <span>Men</span>
      </Link>

      {/* 🟢 Sneakers Button */}
      <Link
        to="/sneakers"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <GiRunningShoe /> <span>Sneakers</span>
      </Link>

      {/* 🟣 Women Button */}
      <Link
        to="/women"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <FaFemale /> <span>Women</span>
      </Link>

      {/* 🟠 Kidz Button */}
      <Link
        to="/kidz"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <FaChild /> <span>Kidz</span>
      </Link>

      {/* 🟦 Contact Button (NEW) */}
      <Link
        to="/contact"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <MdContactMail /> <span>Contact</span>
      </Link>

      {/* 🔵 Login Button */}
      <Link
        to="/login"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <FaSignInAlt /> <span>Login</span>
      </Link>

      {/* 🔵 Signup Button */}
      <Link
        to="/signup"
        className="flex items-center space-x-1 text-gray-800 font-semibold hover:text-white hover:underline transition"
      >
        <FaUserPlus /> <span>Signup</span>
      </Link>

    </div>
  );
};

export default SubNavbar;
