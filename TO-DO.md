# TO-DO - Netflix Clone / Local dir

## Analyse du Projet

**Stack actuelle:**

- Next.js ^16
- npm package manager
- Local media from `/public/media/` folder

---

## ✅ COMPLETED - Core Implementation (SIMPLE-LOCAL-PLAN)

### Fichiers Créés

- [x] `scripts/scan-media.js` - Scanner les films/séries depuis `/public/media/`
  - ✅ Sanitization des IDs (supprime caractères spéciaux `[ ] < > : " | ? *`)
  - ✅ Normalisation des titres
  - ✅ Extraction titre/année automatique
- [x] `src/data/media.json` - Base de données générée automatiquement (3 films + 1 série)
- [x] `src/components/video-player.tsx` - Lecteur vidéo HTML5 avec reprise de lecture
  - ✅ Support MP4 avec type MIME explicite
  - ✅ Fallback WebM
  - ✅ Preload metadata
  - ✅ Bouton play au centre (visible au démarrage)
  - ✅ Bouton retour flèche en haut à gauche (navigation router.back())
- [x] `src/components/local-movie-card.tsx` - Carte film Netflix-style
- [x] `src/components/local-episode-card.tsx` - Carte épisode
- [x] `src/lib/local-media.ts` - Helpers pour accéder aux données média

### Pages Créées

- [x] `src/app/(shows)/movies/page.tsx` - Catalogue des films
- [x] `src/app/(shows)/tv-shows/page.tsx` - Catalogue des séries
- [x] `src/app/(shows)/watch/movie/[id]/page.tsx` - Lecteur film (async + params Promise)
- [x] `src/app/(shows)/watch/show/[showId]/s/[season]/e/[episode]/page.tsx` - Lecteur série (async + params Promise)

---

## ✅ COMPLETED - Bug Fixes & Optimizations

### Corrections Next.js 15

- [x] `params` doit être awaited dans les Server Components
  - Mis à jour: `/watch/movie/[id]/page.tsx`
  - Mis à jour: `/watch/show/[showId]/s/[season]/e/[episode]/page.tsx`
- [x] Suppression de la route générique `/watch/[id]` (conflit avec `/watch/movie/[id]` et `/watch/show/...`)
- [x] Migration `themeColor` de `metadata` vers `viewport` export dans `src/app/layout.tsx`

### Corrections d'IDs & Fichiers

- [x] Sanitization des IDs avec caractères spéciaux (ex: `[yts-mx]` → `yts-mx`)
- [x] Amélioration du lecteur vidéo pour meilleure compatibilité
- [x] Ajout des types MIME explicites pour MP4
- [x] Correction routing séries TV: `/s/${season}/e/${episode}` (au lieu de `/s${season}/e${episode}`)

### Contrôles Utilisateur

- [x] Bouton Play au centre du lecteur
- [x] Bouton Retour (ChevronLeft) en haut à gauche
- [x] Icônes Lucide React intégrées

---

## 🚀 Current Status - Prêt pour USE

L'application est **100% fonctionnelle et prête pour usage** avec :
- ✅ Scan automatique des films/séries
- ✅ Interface Netflix-style (grille + hover effects)
- ✅ Lecteur vidéo avec reprise de lecture (localStorage)
- ✅ Support films ET séries TV
- ✅ Gestion smart du naming (extraction titre/année)
- ✅ Sanitization robuste des IDs (caractères spéciaux)
- ✅ Compatibilité Next.js 15 complète (async params)
- ✅ Contrôles utilisateur (bouton play + retour)
- ✅ Routing correct pour films et séries

**Pour ajouter du contenu :**

```bash
# 1. Mettre tes fichiers dans public/media/movies/ ou public/media/tv-shows/
# 2. Lancer le scan
npm run scan
# 3. Reload l'app
```

---

## 📋 Medium Priority - Améliorations à Faire

- [ ] Page d'accueil (hero banner + caroussel featured)
- [ ] Recherche locale simple (filter par titre)
- [ ] Bouton "Play" quick-start sur les cartes (hover)
- [ ] Support des posters/backdrops optionnels (avec fallback images)
- [ ] Génération auto des thumbnails via ffmpeg
- [ ] Ratings/favorites locaux (localStorage)
- [ ] Affichage temps/durée dans le lecteur
- [ ] Barre de progression customisée

## 🎨 Low Priority - Features & Polish

- [ ] Évaluation personnelle (like/dislike)
- [ ] Historique de lecture
- [ ] Mode dark/light toggle
- [ ] Responsive mobile (test)
- [ ] Animations de transition
- [ ] Bouton "Ouvrir dans MPC-HC" pour lecture externe
- [ ] Export de la librairie (JSON)
- [ ] Scan incrémental (cache des hash fichiers)
