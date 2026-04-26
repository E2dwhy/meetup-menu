import { useState, useEffect } from 'react';
import { MenuData } from '../types/menu';
import { MenuService } from '../services/menuService.ts';
import { useOnlineStatus } from './useOnlineStatus.ts';

export const useMenuData = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const loadMenuData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (isOnline) {
          // Try to get fresh data from Firebase
          const firebaseData = await MenuService.getMenuFromFirebase();
          
          if (firebaseData) {
            setMenuData(firebaseData);
            await MenuService.cacheMenuLocally(firebaseData);
          } else {
            // If no data in Firebase, use local data and upload it
            const localData = MenuService.getLocalMenu();
            setMenuData(localData);
            await MenuService.cacheMenuLocally(localData);
            
            // Upload to Firebase for future use
            try {
              await MenuService.uploadMenuToFirebase();
            } catch (uploadError) {
              console.warn('Could not upload menu to Firebase:', uploadError);
            }
          }
        } else {
          // Offline: try cached data first, then fallback to local data
          const cachedData = await MenuService.getCachedMenu();
          
          if (cachedData) {
            setMenuData(cachedData);
          } else {
            const localData = MenuService.getLocalMenu();
            setMenuData(localData);
          }
        }
      } catch (err) {
        console.error('Error loading menu data:', err);
        setError('Impossible de charger le menu. Utilisation des données locales.');
        
        // Fallback to local data
        const localData = MenuService.getLocalMenu();
        setMenuData(localData);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();

    // Set up real-time updates when online
    if (isOnline) {
      const unsubscribe = MenuService.subscribeToMenuUpdates((updatedData) => {
        setMenuData(updatedData);
        MenuService.cacheMenuLocally(updatedData);
      });

      return unsubscribe;
    }
  }, [isOnline]);

  return { menuData, loading, error, isOnline };
};
