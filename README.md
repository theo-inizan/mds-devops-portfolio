# Portfolio - Théo

Portfolio personnel moderne développé avec Next.js 16, React 19, Tailwind CSS v4 et Framer Motion.

## 🚀 Aperçu

Landing page single-page présentant :
- **Hero Section** : Accroche percutante avec CTA
- **Tech Stack** : Compétences techniques avec animations
- **Expérience** : 3 ans chez Déco & Compagnie
- **Projets** : Galerie de projets réalisés
- **Contact** : Formulaire de contact et liens sociaux

## 🛠️ Technologies

- **Framework** : Next.js 16 (App Router)
- **UI Library** : React 19
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **TypeScript** : Type safety
- **Font** : Inter (Google Fonts)

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Palette de couleurs

- **Background** : `#0b132b`
- **Cards** : `#1c2541`
- **Secondary** : `#3a506b`
- **Accent** : `#5bc0be`
- **Glow** : `#6fffe9`

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx        # Layout principal avec métadonnées
│   ├── page.tsx          # Page d'accueil (assemblage des sections)
│   └── globals.css       # Styles globaux et configuration Tailwind v4
├── components/
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TechStack.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── public/              # Assets statiques
└── package.json
```

## 🚀 Déploiement

### Docker sur VPS (Production)

**Configuration Docker complète incluse !** 🐳

```bash
# 1. Tester localement
.\test-docker.ps1

# 2. Build et test local
docker build -t theo-portfolio:latest .
docker run -p 3000:3000 theo-portfolio:latest

# 3. Déployer sur VPS
.\deploy.ps1
```

Voir le guide complet : [DEPLOY.md](DEPLOY.md)

**Fichiers Docker inclus:**
- `Dockerfile` - Image optimisée multi-stage
- `docker-compose.yml` - Orchestration
- `.dockerignore` - Optimisation du build
- `deploy.ps1` / `deploy.sh` - Scripts de déploiement automatique
- `nginx.conf` - Configuration reverse proxy
- `Makefile` - Commandes simplifiées

### Vercel (Alternative rapide)

1. Pusher le code sur GitHub
2. Connecter le repo à [Vercel](https://vercel.com/new)
3. Déployer automatiquement

```bash
# Alternative : CLI Vercel
npm install -g vercel
vercel
```

### Build manuel

```bash
# Créer un build de production
npm run build

# Lancer en production
npm start
```

## ⚙️ Scripts disponibles

```bash
npm run dev      # Serveur de développement avec Turbopack
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Linter ESLint
```

## 🎯 Fonctionnalités

- ✅ Design moderne et minimaliste
- ✅ Animations fluides avec Framer Motion
- ✅ Responsive mobile-first
- ✅ SEO optimisé
- ✅ TypeScript pour la robustesse
- ✅ Performance optimale avec Next.js
- ✅ Dark mode natif

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Informations personnelles** : Modifier les composants dans `components/sections/`
2. **Couleurs** : Ajuster les variables CSS dans `app/globals.css`
3. **Contenu** : Mettre à jour les arrays de data dans chaque section
4. **Email** : Remplacer `theo.dev@example.com` par votre email
5. **Liens sociaux** : Modifier les URLs dans `Contact.tsx`

## 📄 Licence

© 2025 Théo. Tous droits réservés.

## 🤝 Contact

- **Email** : theo.dev@example.com
- **GitHub** : [github.com/theo-dev](https://github.com/theo-dev)
- **LinkedIn** : [linkedin.com/in/theo-dev](https://linkedin.com/in/theo-dev)
