
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const PageBanner = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 md:py-12 mb-6 md:mb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Discover Our Products</h1>
          <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
            Browse our collection of high-quality products curated just for you. 
            From electronics to clothing, we've got everything you need.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base">
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
