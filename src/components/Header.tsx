
import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">ShopHub</h1>
        </div>
        
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
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-700 hover:text-primary">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-700 hover:text-primary">
            <User size={20} />
          </button>
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
