import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const QRCodePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary flex flex-col items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/assets/logo-meet-up-new.png"
            alt="Meetup Lounge Logo"
            className="h-20 md:h-28 w-auto object-contain"
          />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-secondary/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-primary/20"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-fancy font-bold text-center mb-3 text-white"
          >
            Bienvenue
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-primary mb-2 text-lg font-semibold"
          >
            à Meetup Lounge
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-300 mb-8 text-sm md:text-base leading-relaxed"
          >
            Scannez le code QR ci-dessous pour découvrir notre menu complet et nos spécialités du moment.
          </motion.p>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative mb-8"
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-2xl"></div>
            
            {/* QR Code Container */}
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-50"></div>

              {/* QR Code Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex justify-center relative"
              >
                <img
                  src="/assets/qr-code-menu.png"
                  alt="QR Code Menu"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center space-x-3 bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6"
          >
            <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm md:text-base text-gray-200">
              Utilisez votre téléphone pour scanner le code QR
            </p>
          </motion.div>

          {/* Footer Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-gray-400 text-xs md:text-sm"
          >
            Pas de papier, plus pratique, plus rapide. Profitez de notre expérience numérique !
          </motion.p>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full mt-8 origin-center"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default QRCodePage;
