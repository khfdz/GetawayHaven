import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 py-3 rounded px-24 border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="text-xl font-small">
          <span className="text-pink1">Getaway</span>
          <span className="text-red-800">haven.</span>
        </Link>
        <div className="ml-auto flex md:order-2">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="text-pink1 hover:text-pink2 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-pink2 hover:text-pink1 px-3 py-2 rounded-md text-sm font-medium">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-pink2 hover:text-pink1 px-3 py-2 rounded-md text-sm font-medium">
                  Agents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
