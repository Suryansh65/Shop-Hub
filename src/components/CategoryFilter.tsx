
import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  // Function to format category name for display
  const formatCategoryName = (category: string) => {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="flex items-center w-full sm:w-auto">
      <span className="mr-2 text-gray-700 font-medium text-sm">Category:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto text-sm h-9">
            <span className="truncate">
              {selectedCategory === 'all' ? 'All Categories' : formatCategoryName(selectedCategory)}
            </span>
            <ChevronDown size={16} className="ml-auto" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[200px]">
          <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
            <DropdownMenuRadioItem value="all">
              All Categories
            </DropdownMenuRadioItem>
            {categories.map((category) => (
              <DropdownMenuRadioItem key={category} value={category}>
                {formatCategoryName(category)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryFilter;
