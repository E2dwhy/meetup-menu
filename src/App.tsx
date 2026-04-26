import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, AlertCircle, Loader2 } from 'lucide-react';
import { MenuCategory as MenuCategoryType } from './types/menu';
import Header from './components/Header.tsx';
import CategoriesOverview from './components/CategoriesOverview.tsx';
import CategoryPage from './components/CategoryPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import QRCodePage from './components/QRCodePage.tsx';
import { useMenuData } from './hooks/useMenuData.ts';

const App: React.FC = () => {
  const { menuData, loading, error, isOnline } = useMenuData();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType | null>(null);
  const [currentPage, setCurrentPage] = useState<'menu' | 'qr'>('menu');

  // Handle URL-based routing
  useEffect(() => {
    const view = new URLSearchParams(window.location.search).get('view');
    if (view === 'qr') {
      setCurrentPage('qr');
    } else {
      setCurrentPage('menu');
    }
  }, []);

  const handleCategorySelect = (category: MenuCategoryType) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleToggleQR = () => {
    if (currentPage === 'qr') {
      window.location.href = '/?view=menu';
    } else {
      window.location.href = '/?view=qr';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-primary"
        >
          <Loader2 className="w-12 h-12" />
        </motion.div>
      </div>
    );
  }

  // Show QR code page
  if (currentPage === 'qr') {
    return <QRCodePage />;
  }

  // Show menu page
  if (error || !menuData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark-secondary rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Erreur de chargement</h2>
          <p className="text-gray-400 mb-6">{error || 'Impossible de charger le menu'}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Réessayer</span>
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header isOnline={isOnline} lastUpdated={menuData.lastUpdated} onToggleQR={handleToggleQR} />
      
      <AnimatePresence mode="wait">
        {selectedCategory ? (
          <CategoryPage
            key={selectedCategory.id}
            category={selectedCategory}
            onBack={handleBackToCategories}
            categoryIndex={menuData.categories.findIndex(cat => cat.id === selectedCategory.id)}
          />
        ) : (
          <CategoriesOverview
            key="categories"
            categories={menuData.categories}
            onCategorySelect={handleCategorySelect}
          />
        )}
      </AnimatePresence>

      <ScrollToTop />
    </div>
  );
};

export default App;
