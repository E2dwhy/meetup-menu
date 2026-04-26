export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
  lastUpdated: string;
}
