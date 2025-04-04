
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm py-3 md:py-4 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">ShopHub</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Shop</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">Categories</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary font-medium">About</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-2 text-gray-700 hover:text-primary">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-700 hover:text-primary">
            <User size={20} />
          </button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <ShoppingCart size={16} />
            <span className="hidden sm:inline text-sm">Cart</span>
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="p-2 text-gray-700 hover:text-primary md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium py-1">Home</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium py-1">Shop</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium py-1">Categories</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium py-1">About</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
