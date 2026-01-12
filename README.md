# Portfolio Next.js

Un portfolio moderne et responsive développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Next.js 15** - Framework React pour la production
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **ESLint** - Linting pour la qualité du code

## 📁 Structure du projet

```
src/
├── app/                  # App Router de Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   ├── globals.css      # Styles globaux
│   ├── about/           # Page à propos
│   ├── projects/        # Page des projets
│   └── contact/         # Page de contact
├── components/          # Composants réutilisables
│   ├── Header.tsx       # Navigation
│   ├── Footer.tsx       # Pied de page
│   ├── Hero.tsx         # Section héro
│   ├── Skills.tsx       # Compétences
│   └── FeaturedProjects.tsx # Projets mis en avant
public/                  # Assets statiques
├── images/              # Images du portfolio
└── cv.pdf              # CV téléchargeable
```

## 🛠️ Installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repo>
   cd portfolio-nextjs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   Aller à [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### 1. Informations personnelles
Modifiez les fichiers suivants avec vos informations :
- `src/app/layout.tsx` - Métadonnées du site
- `src/components/Hero.tsx` - Présentation principale
- `src/app/about/page.tsx` - Informations détaillées
- `src/app/contact/page.tsx` - Coordonnées de contact

### 2. Projets
Editez le fichier `src/app/projects/page.tsx` et `src/components/FeaturedProjects.tsx` pour ajouter vos projets :
```typescript
const projects = [
  {
    id: 1,
    title: "Nom du projet",
    description: "Description courte",
    longDescription: "Description détaillée",
    image: "/project-1.jpg",
    technologies: ["React", "Node.js"],
    github: "https://github.com/user/repo",
    demo: "https://demo-url.com",
    featured: true
  }
]
```

### 3. Images
Ajoutez vos images dans le dossier `public/` :
- `hero-image.jpg` - Image d'en-tête (2432x1442px recommandé)
- `profile-photo.jpg` - Photo de profil (format carré)
- `project-1.jpg` à `project-6.jpg` - Images des projets
- `cv.pdf` - Votre CV

### 4. Compétences
Modifiez le fichier `src/components/Skills.tsx` :
```typescript
const skills = [
  {
    name: 'Frontend',
    description: 'React, Next.js, TypeScript',
    icon: Code,
  }
]
```

### 5. Couleurs et thème
Les couleurs sont configurées dans `tailwind.config.js` et `src/app/globals.css`. Modifiez les variables CSS pour personnaliser le thème.

## 🌐 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Votre site sera déployé à chaque push

### Netlify
1. Buildez le projet : `npm run build`
2. Uploadez le dossier `.next` et `public`
3. Configurez les redirections pour le SPA

### Autres hébergeurs
Consultez la [documentation Next.js](https://nextjs.org/docs/deployment) pour d'autres options.

## 🔧 Configuration avancée

### Variables d'environnement
Créez un fichier `.env.local` pour les variables sensibles :
```
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
EMAILJS_PUBLIC_KEY=your_emailjs_key
```

### Optimisations SEO
- Métadonnées configurées dans `layout.tsx`
- Sitemap automatique avec Next.js
- Images optimisées avec `next/image`

### Performance
- Code splitting automatique
- Lazy loading des composants
- Optimisation des images
- Préchargement des routes

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- Design mobile-first
- Breakpoints Tailwind standard
- Navigation adaptative
- Images responsive

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email** : contact@example.com
- **LinkedIn** : [votre-linkedin](https://linkedin.com/in/votre-profil)
- **GitHub** : [votre-github](https://github.com/votre-username)

---

Fait avec ❤️ et Next.js