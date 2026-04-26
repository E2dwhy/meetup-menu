import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory } from '../types/menu';

interface CategoryNavigationProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-dark-secondary/95 backdrop-blur-md shadow-lg rounded-xl p-3 mb-4 sticky top-20 md:top-24 z-40"
    >
      <h3 className="text-sm font-semibold text-white mb-2 hidden md:block">Catégories</h3>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryClick(category.id)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-dark-accent text-gray-300 hover:bg-primary/80'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default CategoryNavigation;
