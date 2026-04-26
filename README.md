# Restaurant Lounge Menu

Une application web progressive (PWA) moderne pour le menu d'un restaurant lounge avec support hors ligne et synchronisation Firebase.

## Fonctionnalités

- 📱 **Design Responsive**: Adapté à tous les écrans (mobile, tablette, desktop)
- 🌐 **Support Hors Ligne**: Fonctionne sans connexion internet
- 🔥 **Intégration Firebase**: Synchronisation en temps réel des données
- ✨ **Animations Modernes**: Interface fluide avec Framer Motion
- 🎨 **Design Élégant**: Interface moderne avec Tailwind CSS
- 📂 **Navigation par Catégories**: Accès rapide aux différentes sections du menu
- 💾 **Cache Local**: Stockage intelligent des données pour performance

## Technologies Utilisées

- **React 18** avec TypeScript
- **Tailwind CSS** pour le style
- **Framer Motion** pour les animations
- **Firebase Firestore** pour la base de données
- **Service Worker** pour le support PWA
- **Lucide React** pour les icônes

## Installation

1. Cloner le projet:
```bash
git clone <repository-url>
cd restaurant-lounge-menu
```

2. Installer les dépendances:
```bash
npm install
```

3. Configurer Firebase:
   - Créer un projet Firebase sur [Firebase Console](https://console.firebase.google.com/)
   - Copier la configuration dans `src/firebase/config.ts`
   - Remplacer les valeurs par vos clés Firebase

4. Démarrer l'application:
```bash
npm start
```

## Déploiement sur Firebase

1. Installer Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Se connecter à Firebase:
```bash
firebase login
```

3. Initialiser le projet:
```bash
firebase init hosting
```

4. Construire et déployer:
```bash
npm run build
firebase deploy
```

## Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # En-tête avec statut de connexion
│   ├── MenuCategory.tsx # Catégorie de menu
│   └── CategoryNavigation.tsx # Navigation par catégories
├── data/               # Données statiques
│   └── menuData.ts     # Structure du menu
├── firebase/           # Configuration Firebase
│   └── config.ts       # Configuration de l'app Firebase
├── hooks/              # Hooks personnalisés
│   ├── useOnlineStatus.ts # Gestion du statut de connexion
│   └── useMenuData.ts  # Chargement et synchronisation des données
├── services/           # Services métier
│   └── menuService.ts  # Service de gestion du menu
├── types/              # Types TypeScript
│   └── menu.ts         # Types pour le menu
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée
└── index.css           # Styles globaux
```

## Fonctionnalités PWA

L'application est une Progressive Web App (PWA) complète:

- **Installation**: Peut être installée sur l'écran d'accueil
- **Hors Ligne**: Fonctionne sans connexion grâce au service worker
- **Mises à Jour**: Synchronisation automatique des données
- **Performances**: Chargement rapide avec cache intelligent

## Personnalisation

### Modifier le Menu

Les données du menu sont définies dans `src/data/menuData.ts`. Vous pouvez:

- Ajouter/modifier des catégories
- Ajouter/modifier des plats
- Mettre à jour les prix

### Personnaliser le Design

- Modifier les couleurs dans `tailwind.config.js`
- Ajuster les animations dans les composants
- Personnaliser les styles dans `src/index.css`

## Support Hors Ligne

L'application utilise plusieurs stratégies pour fonctionner hors ligne:

1. **Service Worker**: Cache les ressources statiques
2. **Local Storage**: Stocke les données du menu
3. **Fallback**: Utilise les données locales si Firebase n'est pas accessible

## Développement

```bash
# Démarrer le serveur de développement
npm start

# Lancer les tests
npm test

# Construire pour la production
npm run build

# Lancer l'analyse de bundle
npm run analyze
```

## Licence

© 2024 Restaurant Lounge - Tous droits réservés
