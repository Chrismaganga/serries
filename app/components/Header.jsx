import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">eCommerce Store</h1>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Products</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
