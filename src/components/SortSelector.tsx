
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

interface SortSelectorProps {
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
}

const sortOptions = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Top Rated' },
  { value: 'name-asc', label: 'Name: A to Z' },
];

const SortSelector: React.FC<SortSelectorProps> = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex items-center w-full sm:w-auto">
      <span className="mr-2 text-gray-700 font-medium text-sm">Sort by:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto text-sm h-9">
            <span className="truncate">
              {sortOptions.find(option => option.value === sortOption)?.label}
            </span>
            <ChevronDown size={16} className="ml-auto" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[200px]">
          <DropdownMenuRadioGroup value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
            {sortOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortSelector;
