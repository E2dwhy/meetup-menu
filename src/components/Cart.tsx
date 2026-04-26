import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext.tsx';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.itemCount === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-20 right-4 w-80 max-h-[70vh] bg-dark-secondary border border-dark-accent rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-dark-accent bg-dark-primary">
          <h3 className="text-white font-semibold">Commande</h3>
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-between py-3 border-b border-dark-accent/30 last:border-0"
            >
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">{item.name}</h4>
                <p className="text-gray-400 text-xs">{item.price.toLocaleString('fr-FR')}F</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-dark-accent text-gray-300 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                
                <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-dark-accent text-gray-300 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors ml-2"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border-t border-dark-accent bg-dark-primary">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-300">Total:</span>
            <span className="text-white font-bold text-lg">{cart.total.toLocaleString('fr-FR')}F</span>
          </div>
          <button
            onClick={clearCart}
            className="w-full bg-red-500 text-white py-2 rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Vider la commande
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
