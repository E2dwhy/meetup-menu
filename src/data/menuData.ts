import { MenuData } from '../types/menu';

export const menuData: MenuData = {
  categories: [
    {
      id: 'entrees',
      name: 'LES ENTREES',
      items: [
        { id: 'salade-chef', name: 'Salade du chef', price: 5000, category: 'entrees', image: '/assets/salade.avif' },
        { id: 'salade-crevettes', name: 'Salade de crevettes', price: 6000, category: 'entrees', image: '/assets/salade-crevettes.jpg' },
      ]
    },
    {
      id: 'plats-gourmands',
      name: 'NOS Plats Gourmands',
      items: [
        { id: 'meet-burger', name: 'Meet Burger', price: 5000, category: 'plats-gourmands', image: '/assets/burger.avif' },
        { id: 'frites-fromage-boeuf', name: 'Frites fromage bœuf', price: 9000, category: 'plats-gourmands', image: '/assets/frittes-fromages-beeauf.jpg' },
        { id: 'lasagne-boeuf', name: 'Lasagne au bœuf', price: 9000, category: 'plats-gourmands', image: '/assets/Lasagne-au-bœuf.png' },
      ]
    },
    {
      id: 'plateaux-mix-grill',
      name: 'NOS PLATEAUX MIX GRILL',
      items: [
        { id: 'mix-bbq', name: 'Mix BBQ', description: '(poulet, Ribs de porc, Merguez, Roti de porc, brochettes)', price: 25000, category: 'plateaux-mix-grill', image: '/assets/Mix-BBQ.png' },
        { id: 'mix-carnivore', name: 'Mix carnivore', description: '(côtes de veau, Roti de bœuf, brochette de filet, poulet)', price: 25000, category: 'plateaux-mix-grill', image: '/assets/Mix-carnivore.png' },
        { id: 'maxi-mix-carnivore', name: 'Maxi mix carnivore', description: '(double côtes de veau, double brochettes bœuf, Roti de bœuf, poulet)', price: 40000, category: 'plateaux-mix-grill', image: '/assets/Mix-carnivore.png' },
        { id: 'mix-fruits-mer', name: 'Mix fruits de mer', description: '(Langouste, brochette merou, calamar, gambas)', price: 40000, category: 'plateaux-mix-grill', image: '/assets/Mix-fruits-de-mer.png' },
      ]
    },
    {
      id: 'poissons-fruits-mer',
      name: 'POISSONS ET FRUITS DE MER',
      items: [
        { id: 'gambas-sautees', name: 'Gambas sautées', price: 12000, category: 'poissons-fruits-mer', image: '/assets/Gambas-sautees.jpg' },
        { id: 'carpe-braisee', name: 'Carpe braisée', price: 8000, category: 'poissons-fruits-mer', image: '/assets/Carpe-braisee.jpg' },
        { id: 'langouste-braisee', name: 'Langouste braisée', price: 12000, category: 'poissons-fruits-mer', image: '/assets/langouste-braisee.jpg' },
        { id: 'sole-braisee', name: 'Sole braisée', price: 12000, category: 'poissons-fruits-mer', image: '/assets/Sole-braisée.png' },
        { id: 'calamar-saute-legumes', name: 'Calamar sauté aux légumes', price: 7000, category: 'poissons-fruits-mer', image: '/assets/Calamar-sauté-aux-légumes.jpg' },
      ]
    },
    {
      id: 'viande',
      name: 'VIANDE',
      items: [
        { id: 'poulet-braise', name: 'Poulet braisé ½', price: 5000, category: 'viande', image: '/assets/demi-poulet-braisé.png' },
        { id: 'entrecote-boeuf', name: 'Entrecôte de bœuf', price: 10000, category: 'viande', image: '/assets/Entrecôte-de-bœuf.jpg' },
        { id: 'brochettes-filet-boeuf', name: 'Brochettes de filet de bœuf', price: 6000, category: 'viande', image: '/assets/Brochettes-de-filet-de-bœuf.png' },
        { id: 'cote-porc-braisee', name: 'Côte de porc braisé', price: 9000, category: 'viande', image: '/assets/Côte-de-porc-braisé.png' },
        { id: 'ribs-porc', name: 'Ribs de porc', price: 9000, category: 'viande', image: '/assets/Côte-de-porc-braisé.png' },
        { id: 'Cote-de-boeuf-xxl', name: 'Côte de boeuf', price: 12000, category: 'viande', image: '/assets/cote-de-boeuf.jpg' },

      ]
    },
    {
      id: 'garnitures',
      name: 'Garnitures',
      items: [
        { id: 'attieke-riz', name: 'attiéké, riz', price: 1000, category: 'garnitures', image: '/assets/attieke.avif' },
        { id: 'tagliatelles', name: 'Taggliatelles', price: 2000, category: 'garnitures', image: '/assets/tagliatelles.png' },
        { id: 'puree-pomme-terre', name: 'purée de pomme de terre', price: 2000, category: 'garnitures', image: '/assets/puree-pomme-terre.jpg' },
        { id: 'haricots-verts', name: 'haricots vert', price: 2000, category: 'garnitures', image: '/assets/haricots-verts.jpeg' },
        { id: 'alloco-frites-pomme-sautee-ignames', name: 'Alloco, frites, Pomme sautée, ignames', price: 1500, category: 'garnitures', image: '/assets/alloco-frites-pomme-sautee.png' },
      ]
    },
    {
      id: 'dessert',
      name: 'Dessert',
      items: [
        { id: 'salade-fruit', name: 'Salade de fruit', price: 2000, category: 'dessert', image: '/assets/Salade -de-fruit.png' },
        { id: 'crepe-nature', name: 'Crêpe Nature', price: 2000, category: 'dessert', image: '/assets/crepe-nature.png' },
        { id: 'crepe-nutella', name: 'Crêpe au Nutella', price: 3000, category: 'dessert', image: '/assets/Crêpeau-Nutella.jpg' },
      ]
    },
    {
      id: 'bieres-softs',
      name: 'LES BIERES & SOFTS',
      items: [
        { id: 'heineken-desperados-beaufort', name: 'Heineken – desperados – beaufort', price: 1000, category: 'bieres-softs', image: '/assets/Heineken–desperados–beaufort.jpg' },
        { id: 'guinness-budweiser', name: 'Guinness – Budweiser', price: 1500, category: 'bieres-softs', image: '/assets/Guinness–Budweiser.jpeg' },
        { id: 'soda-jus-nature', name: 'Soda – jus nature', price: 1500, category: 'bieres-softs', image: '/assets/Soda-jus-nature.png' },
        { id: 'codys-energy', name: 'Codys energy', price: 1500, category: 'bieres-softs', image: '/assets/Codys-energy.png' },
        { id: 'red-bull', name: 'Red bull', price: 2000, category: 'bieres-softs', image: '/assets/Red-bull.jpg' },
        { id: 'eau-minerale', name: 'Eau minerale', price: 1500, category: 'bieres-softs', image: '/assets/Eau-minerale.png' },
        { id: 'eau-perrier', name: 'Eau Perrier', price: 1500, category: 'bieres-softs', image: '/assets/Eau-Perrier.jpg' },
      ]
    },
    {
      id: 'cocktails-maison',
      name: 'LES COCKTAILS MAISON',
      items: [
        { id: 'no-stress', name: 'No stress', description: '(vodka , gin, ananas)', price: 5000, category: 'cocktails-maison', image: '/assets/no-stress.jpeg' },
        { id: 'london-passion', name: 'London Passion', description: '(jus de passion, gin, citron)', price: 5000, category: 'cocktails-maison', image: '/assets/London-passion.jpeg' },
        { id: 'sexual-chocolate', name: 'Sexual chocolate', description: '(baileys, vodka, chocolate)', price: 6000, category: 'cocktails-maison', image: '/assets/sexual-chocolate.jpeg' },
        { id: 'meet-up-partouze', name: 'Meet Up partouze', description: '(vodka, gin, rhum, jus orange , grenadine)', price: 5000, category: 'cocktails-maison', image: '/assets/meetup-partouze.jpeg' },
        { id: 'baileys-oreo', name: 'Baileys Oréo', description: '(rhum café, baileys, vodka)', price: 5000, category: 'cocktails-maison', image: '/assets/Baileys-oreo.jpeg' },
        { id: 'meet-up-ice', name: 'Meet \'up Ice', description: '(passion , ananas, framboise)', price: 5000, category: 'cocktails-maison', image: '/assets/Meetup-ice.jpeg' },
        { id: 'desperinha', name: 'Desperinha', description: '(despe, citron, cachaca)', price: 4000, category: 'cocktails-maison', image: '/assets/desperinha.jpg' },
      ]
    },
    {
      id: 'classiques',
      name: 'LES CLASSIQUES',
      items: [
        { id: 'mojito', name: 'Mojito', price: 5000, category: 'classiques', image: '/assets/mojito.png' },
        { id: 'pina-colada', name: 'Pina colada', price: 6000, category: 'classiques', image: '/assets/Pina-colada.png' },
        { id: 'sex-on-the-beach', name: 'Sex on the beach', price: 5000, category: 'classiques', image: '/assets/Sex-on-the-beach.jpg' },
        { id: 'margarita', name: 'Margarita', price: 6000, category: 'classiques', image: '/assets/Margarita.jpg' },
        { id: 'cuba-libre', name: 'Cuba llibre', price: 5000, category: 'classiques', image: '/assets/Cuba-llibre.png' },
      ]
    }
  ],
  lastUpdated: new Date().toISOString()
};
