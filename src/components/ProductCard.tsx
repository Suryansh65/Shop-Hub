
import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/services/api';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-contain w-full h-full p-4"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-gray-600 hover:text-secondary">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-800 line-clamp-2 flex-1 mr-2" title={product.title}>
            {product.title}
          </h3>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"} 
                className="text-yellow-500"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.rating.count})</span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-4" title={product.description}>
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="sm" 
            className="flex items-center gap-1"
          >
            <ShoppingCart size={15} />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
