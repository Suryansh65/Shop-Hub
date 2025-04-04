
import React from 'react';
import { Button } from '@/components/ui/button';

const PageBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Discover Our Products</h1>
          <p className="text-gray-700 text-lg mb-6">
            Browse our collection of high-quality products curated just for you. 
            From electronics to clothing, we've got everything you need.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
