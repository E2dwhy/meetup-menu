import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wifi, WifiOff, QrCode } from 'lucide-react';

interface HeaderProps {
  isOnline: boolean;
  lastUpdated?: string;
  onToggleQR?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOnline, lastUpdated, onToggleQR }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-secondary/95 backdrop-blur-md border-b border-dark-accent sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div>
              <img 
                src="/assets/logo-meet-up-new.png" 
                alt="Meetup Lounge Logo" 
                className="h-12 md:h-24 w-auto object-contain object-center object-cover"
              />
            </div>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-dark-accent px-3 py-1 rounded-full">
              {isOnline ? (
                <Wifi className="w-4 h-4 text-green-400" />
              ) : (
                <WifiOff className="w-4 h-4 text-orange-400" />
              )}
              <span className="text-sm text-gray-300">
                {isOnline ? 'En ligne' : 'Hors ligne'}
              </span>
            </div>

            {onToggleQR && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggleQR}
                className="bg-primary/20 hover:bg-primary/30 text-primary px-3 py-2 rounded-lg transition-colors flex items-center space-x-2"
                title="Afficher le code QR"
              >
                <QrCode className="w-5 h-5" />
                <span className="text-sm hidden md:inline">QR</span>
              </motion.button>
            )}
            
            {lastUpdated && (
              <div className="text-xs text-gray-400 hidden md:block">
                Mis à jour: {new Date(lastUpdated).toLocaleDateString('fr-FR')}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
