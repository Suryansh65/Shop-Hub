
import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, Product } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import SortSelector, { SortOption } from '@/components/SortSelector';
import PageBanner from '@/components/PageBanner';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  // Fetch products and categories
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
        
        // Set initial filtered products to all products
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error loading initial data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load products. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (products.length > 0) {
      let filtered = [...products];
      
      // Apply category filter
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
      
      // Apply sorting
      switch (sortOption) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          filtered.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          // Default sort (by id or featured)
          filtered.sort((a, b) => a.id - b.id);
      }
      
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, sortOption, products]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <PageBanner />
        
        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold">Our Products</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
              
              <SortSelector 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
              />
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Loading products...</span>
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-600">
                    Try changing your filters or check back later for new products.
                  </p>
                </div>
              ) : (
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
