import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 py-2.5 rounded shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="text-md font-small">
          <span className="text-pink1">Getaway</span>
          <span className="text-red-800">haven.</span>
        </Link>
        <div className="flex md:order-2">
          <Link to="/login" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/stories" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Stories
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
