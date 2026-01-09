# Plan d'Action : Mise en place des Tests Unitaires

## 1. Objectif
Mettre en place un environnement de tests unitaires robuste pour le projet Next.js "Portfolio". Intégrer ces tests dans le pipeline CI/CD existant (GitHub Actions) pour garantir la non-régression avant le déploiement Docker.

## 2. Choix Technologiques
*   **Test Runner**: [Jest](https://jestjs.io/) - Le standard pour React/Next.js.
*   **Testing Library**: [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) - Pour tester les composants du point de vue de l'utilisateur (affichage, interactions).
*   **Environnement**: `jest-environment-jsdom` - Pour simuler le DOM navigateur dans Node.js.

## 3. Étapes d'Implémentation

### Étape A : Installation des dépendances
Installer les paquets nécessaires pour exécuter Jest avec TypeScript et supporter React 19 / Next.js 16.

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

### Étape B : Configuration de Jest
Créer deux fichiers de configuration à la racine du projet.

**1. `jest.config.ts`**
Configuration principale utilisant le preset Next.js.

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

**2. `jest.setup.ts`**
Configuration exécutée avant chaque fichier de test.

```typescript
import '@testing-library/jest-dom'

// Mocks nécessaires pour Framer Motion
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  
  constructor() {}
  
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
  takeRecords() { return []; }
} as any;
```

### Étape C : Scripts `package.json`
Ajouter les scripts pour lancer les tests.

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:ci": "jest --ci --coverage"
}
```

### Étape D : Création des Tests
Créer un dossier `__tests__` à la racine (ou dans `app/`). Structure proposée :

```
portfolio/
  __tests__/
    Home.test.tsx       # Tests pour app/page.tsx
    components/
      HeroSection.test.tsx
      Contact.test.tsx
      ...
```

**Exemple de test (`__tests__/Home.test.tsx`) :**
```tsx
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home Page', () => {
  it('renders all sections', () => {
    const { container } = render(<Home />)
    
    // Vérifier la présence des sections principales via leurs IDs ou contenus
    // Note: Il faudra peut-être ajouter des attributs data-testid aux sections si elles n'ont pas de texte unique.
    
    // Exemple générique si les composants rendent du contenu
    expect(container).toBeInTheDocument()
  })
})
```

### Étape E : Intégration CI/CD (GitHub Actions)
Modifier le fichier `.github/workflows/main.yml`. Ajouter une étape "Run Tests" dans le job `build` ou créer un job séparé `test`.

**Option recommandée : Étape dans le job `build` avant le build.**

```yaml
jobs:
  build:
    steps:
      # ... (checkout & install)
      - name: Install dependencies
        run: npm install

      - name: Run Unit Tests
        run: npm run test:ci

      - name: Build NextJS project
        run: npm run build
      # ...
```

Si les tests échouent, le build s'arrête et le déploiement Docker ne se lance pas.

## 4. Prochaines actions immédiates
1.  Lancer l'installation des dépendances.
2.  Créer les fichiers de configuration.
3.  Écrire le premier test pour la Home page.
4.  Lancer le test en local pour valider.
5.  Pousser la configuration sur git.
