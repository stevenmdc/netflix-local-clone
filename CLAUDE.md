# 🎬 Netflix Clone - Context Rapide

## 📊 Project Overview

- **Stack:** Next.js 16 + npm + Local Media
- **Status:** COMPLETE & FUNCTIONAL

## 🎯 What This Project Does

Netflix-style local media player. Scans `/public/media/` folder, generates `src/data/media.json`, displays films/séries with HTML5 player.

## 📁 Core Files Structure

```yaml
app/
├── lib/
│   ├── utils.ts              # cn() utility + formatDate, getYear, formatEnum
│   ├── local-media.ts        # Type definitions & media scanning logic
│   └── constants.ts          # App constants
├── types/
│   └── index.ts              # Global types
├── components/
│   ├── ui/
│   │   └── skeleton.tsx       # Skeleton loader component (uses cn())
│   ├── video-player.tsx       # HTML5 video player with resume position
│   ├── local-movie-card.tsx   # Movie grid card component
│   └── local-episode-card.tsx # Episode list item component
├── movies/
│   └── page.tsx              # Movies grid page
├── tv-shows/
│   └── page.tsx              # TV shows grid page
├── watch/
│   ├── movie/[id]/
│   │   └── page.tsx          # Movie player page (dynamic route)
│   └── show/[showId]/s/[season]/e/[episode]/
│       └── page.tsx          # Episode player page (dynamic route)
├── page.tsx                  # Home page (index)
├── layout.tsx                # Root layout with metadata
├── loading.tsx               # Loading skeleton UI
├── not-found.tsx             # 404 page
└── globals.css               # Global Tailwind styles
```

### Key Utility Functions

- **cn()** - Merge Tailwind classes with conflict resolution
- **formatDate()** - Convert timestamp to readable date format
- **getYear()** - Extract year from date
- **formatEnum()** - Convert SNAKE_CASE to Title Case

## 🔑 Key Commands

```bash
npm run scan       # Generate media.json from /public/media/ folder
npm run dev        # Start dev server
npm run build      # Build for production
```

## 🎬 Current Data (in media.json)

- **Films:** 3 (Guardians Vol 3, Hacker, In the Heart of the Sea)
- **Series:** 1 (Cyberpunk Edgerunners - 10 episodes)

## ⚡ Quick Setup (Adding Content)

1. Add video files to `/public/media/movies/` or `/public/media/tv-shows/`
2. Run `npm run scan`
3. Reload browser (hot-reload works)

## 🐛 Important Notes

- `params` must be awaited in Server Components (Next.js 15)
- IDs are sanitized (special chars removed: `[ ] < > : " | ? *`)
- Movie IDs format: `title-year` (auto-extracted from folder names)
- Episode routing: `/watch/show/[showId]/s/[season]/e/[episode]`
- Video player uses localStorage for resume position

## 📋 TODO Priority

### High (Optional but useful)

- [ ] Home page with hero banner
- [ ] Local search (filter by title)
- [ ] Play button on hover
- [ ] Auto generate thumbnails (ffmpeg)
- [ ] Duration display in player

### Medium

- [ ] Favorites (localStorage)
- [ ] Watch history
- [ ] Dark mode toggle

### Low

- [ ] Ratings/likes
- [ ] MPC-HC integration
- [ ] Incremental scan (cache)

## 🔗 Types (src/lib/local-media.ts)

```typescript
type LocalMovie = {
  id: string; title: string; year: number | null;
  videoUrl: string; thumbnail?: string | null; backdrop?: string | null;
}

type LocalTvShow = {
  id: string; title: string; poster?: string | null;
  episodes: LocalTvEpisode[];
}

type LocalTvEpisode = {
  season: number; episode: number; title: string; videoUrl: string;
}
```

## 🎨 Features Implemented

✅ Auto media scanning
✅ Netflix-style grid
✅ Video player with resume
✅ Film + Series support
✅ Smart naming (title/year extraction)
✅ ID sanitization
✅ Next.js 15 compatible
✅ Responsive design

---

**Status:** Production ready✅ start by adding content → scan → enjoy! 🍿
