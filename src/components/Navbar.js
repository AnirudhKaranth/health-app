import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        Health App
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="text-white">About Us</Link>
        <Link to="/contact" className="text-white">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
