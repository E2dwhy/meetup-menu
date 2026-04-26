import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config.ts';
import { MenuData } from '../types/menu';
import { menuData } from '../data/menuData.ts';

const MENU_DOC_ID = 'restaurant-menu';

export class MenuService {
  static async uploadMenuToFirebase(): Promise<void> {
    try {
      await setDoc(doc(db, 'menus', MENU_DOC_ID), menuData);
      console.log('Menu uploaded to Firebase successfully');
    } catch (error) {
      console.error('Error uploading menu to Firebase:', error);
      throw error;
    }
  }

  static async getMenuFromFirebase(): Promise<MenuData | null> {
    try {
      const docRef = doc(db, 'menus', MENU_DOC_ID);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as MenuData;
      } else {
        console.log('No menu found in Firebase, using local data');
        return null;
      }
    } catch (error) {
      console.error('Error getting menu from Firebase:', error);
      return null;
    }
  }

  static subscribeToMenuUpdates(callback: (menuData: MenuData) => void): () => void {
    const docRef = doc(db, 'menus', MENU_DOC_ID);
    
    return onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        callback(docSnapshot.data() as MenuData);
      }
    }, (error) => {
      console.error('Error listening to menu updates:', error);
    });
  }

  static getLocalMenu(): MenuData {
    return menuData;
  }

  static async cacheMenuLocally(menuData: MenuData): Promise<void> {
    try {
      await localStorage.setItem('restaurant-menu', JSON.stringify(menuData));
      await localStorage.setItem('menu-cache-timestamp', new Date().toISOString());
    } catch (error) {
      console.error('Error caching menu locally:', error);
    }
  }

  static async getCachedMenu(): Promise<MenuData | null> {
    try {
      const cachedMenu = localStorage.getItem('restaurant-menu');
      const cacheTimestamp = localStorage.getItem('menu-cache-timestamp');
      
      if (cachedMenu && cacheTimestamp) {
        const cacheAge = Date.now() - new Date(cacheTimestamp).getTime();
        const maxCacheAge = 24 * 60 * 60 * 1000; // 24 hours
        
        if (cacheAge < maxCacheAge) {
          return JSON.parse(cachedMenu);
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error getting cached menu:', error);
      return null;
    }
  }
}
