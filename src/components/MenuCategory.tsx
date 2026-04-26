import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory as MenuCategoryType, MenuItem } from '../types/menu';
import { Utensils, Martini, Wine } from 'lucide-react';

interface MenuCategoryProps {
  category: MenuCategoryType;
  index: number;
}

const MenuItemCard: React.FC<{ item: MenuItem; itemIndex: number }> = ({ item, itemIndex }) => {
  const itemImage = item.image || `https://picsum.photos/seed/${item.id}/400/300.jpg`;
  
  // Determine which icon to use based on category
  const getIcon = () => {
    if (item.category === 'cocktails-maison' || item.category === 'classiques') {
      return Martini;
    } else if (item.category === 'bieres-softs') {
      return Wine;
    } else {
      return Utensils;
    }
  };
  
  const Icon = getIcon();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-secondary border border-dark-accent rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={itemImage}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {item.price.toLocaleString('fr-FR')}F
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-bold text-xl flex-1">{item.name}</h3>
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center ml-3">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        </div>
        
        {item.description && (
          <p className="text-primary text-sm font-medium line-clamp-2">{item.description}</p>
        )}
      </div>
      
    </motion.div>
  );
};

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, index }) => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold font-fancy text-white mb-4 pb-2 border-b border-primary/30">
          {category.name}
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-red-600 rounded-full"
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {category.items.map((item, itemIndex) => (
          <MenuItemCard key={item.id} item={item} itemIndex={itemIndex} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
