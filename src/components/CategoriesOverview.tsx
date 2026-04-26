import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory } from '../types/menu';
import { Utensils, Martini, Wine, ChevronRight } from 'lucide-react';

interface CategoriesOverviewProps {
  categories: MenuCategory[];
  onCategorySelect: (category: MenuCategory) => void;
}

const CategoriesOverview: React.FC<CategoriesOverviewProps> = ({ categories, onCategorySelect }) => {
  // Determine which icon to use based on category
  const getCategoryIcon = (categoryId: string) => {
    if (categoryId === 'cocktails-maison' || categoryId === 'classiques') {
      return Martini;
    } else if (categoryId === 'bieres-softs') {
      return Wine;
    } else {
      return Utensils;
    }
  };
  
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-fancy text-white mb-4">
            Meetup Lounge
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Découvrez nos plats et boissons sélectionnés avec soin
          </p>
          <h3 className="text-xl font-semibold text-white mb-6">
            Choisissez une catégorie
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const CategoryIcon = getCategoryIcon(category.id);
            
            return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategorySelect(category)}
              className="bg-dark-secondary border border-dark-accent rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-200" />
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2">
                {category.name}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {category.items.length} {category.items.length === 1 ? 'article' : 'articles'}
              </p>
            </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesOverview;
