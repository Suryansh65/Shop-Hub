
import axios from 'axios';

// Define the product interface
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Create an axios instance
const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

// Function to fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Function to fetch products by category
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
};

// Function to fetch all categories
export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await api.get<string[]>('/products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export default api;
