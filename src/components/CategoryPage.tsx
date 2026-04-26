import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory as MenuCategoryType } from '../types/menu';
import { ArrowLeft, Utensils, Martini, Wine } from 'lucide-react';
import MenuCategory from './MenuCategory.tsx';

interface CategoryPageProps {
  category: MenuCategoryType;
  onBack: () => void;
  categoryIndex: number;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack, categoryIndex }) => {
  // Determine which icon to use based on category
  const getCategoryIcon = () => {
    if (category.id === 'cocktails-maison' || category.id === 'classiques') {
      return Martini;
    } else if (category.id === 'bieres-softs') {
      return Wine;
    } else {
      return Utensils;
    }
  };
  
  const CategoryIcon = getCategoryIcon();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="mb-6 flex items-center space-x-2 bg-primary/20 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-primary/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Retour aux catégories</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
              <CategoryIcon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-fancy text-white">
              Meetup Lounge
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Découvrez nos plats et boissons sélectionnés avec soin
          </p>
        </motion.div>

        <MenuCategory category={category} index={categoryIndex} />
      </div>
    </motion.div>
  );
};

export default CategoryPage;
