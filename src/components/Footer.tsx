
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-400 mb-4">Your one-stop shop for all your shopping needs. Quality products at affordable prices.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Promotions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Returns & Exchanges</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 flex-grow rounded-l focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
