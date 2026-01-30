# 🎬 Netflix Clone - Local Media Player

A Netflix-style local media player built with Next.js. Scan your local video files and enjoy them in a beautiful, responsive interface.

## Screenshot

![Netflix Clone Screenshot](./public/screenshot.png)

## 🚀 Quick Start

### 1. Add Your Videos

Place your video files in:

- **Movies:** `/public/media/movies/`
- **TV Shows:** `/public/media/tv-shows/`

Folder naming format: `Title Year` or `Title`

- Example: `Guardians of the Galaxy Vol 3 2023` → displays as "Guardians of the Galaxy Vol 3" (2023)

### 2. Generate Media Index

```bash
npm run scan
```

This creates `media.json` with all your videos.

### 3. Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

```bash
npm run build   # Production build
```

## ✨ Features

- 🎥 **Movies & TV Shows** - Full support for both formats
- 🎞️ **Video Player** - HTML5 with resume position tracking (localStorage)
- 📱 **Responsive Design** - Works on desktop, tablet, mobile
- 🏠 **Home Page** - Grid view of all content
- 🔍 **Smart Naming** - Auto-extracts title and year from folder names
- 🎨 **Netflix-style UI** - Beautiful dark theme with hover effects

## This App Uses

![Next.js](./public/next.svg) **Next.js 16** - React framework

![Netflix Logo](./public/netflix-logo.svg) **Netflix UI Inspiration** - Design reference

## 📋 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Video:** HTML5 `<video>` element
- **Icons:** Lucide React
- **Storage:** localStorage for playback position

## 🛣️ Routes

```text
/                           # Home - All movies & shows
/movies                     # Movies grid
/tv-shows                   # TV shows grid
/watch/movie/[id]           # Movie player
/watch/show/[showId]/s/[season]/e/[episode]  # Episode player
```

## 📌 Important Notes

- Video files are served from `/public/media/`
- Playback position is saved locally (resumable)
- Special characters in filenames are sanitized
- Supports MP4 and WebM formats

## 🎮 Example Content

The demo includes:

- 3 sample movies (Guardians Vol 3, Hacker, In the Heart of the Sea)
- 1 sample TV show (Cyberpunk Edgerunners - 10 episodes)

Add your own videos and run `npm run scan` to get started!

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

**Status:** Production ready ✅ | Start by adding content → scan → enjoy! 🍿
