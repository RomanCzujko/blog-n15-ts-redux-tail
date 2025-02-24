# 📘 Next.js Blog Application

## 🚀 Project Overview
This is a **modern blog application** built using **Next.js 15**, **React 19**, **Redux Toolkit**, and **Tailwind CSS**. The app supports **dynamic routing**, **API data fetching**, **favorites management**, and is optimized for both **desktop and mobile devices**.

## 🛠 Tech Stack
- **Next.js 15** - App Router & SSR support
- **React 19** - Modern UI rendering
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Swiper.js** - Blog post slider
- **Axios** - API requests

## ✨ Features
- 📌 **List of blog posts** fetched from an API
- 🔍 **Category-based filtering**
- 💖 **Favorites system** stored in localStorage
- 📄 **Post details page** with dynamic routing (`/post/:id`)
- 📱 **Responsive design** (list view on mobile, slider on desktop)
- 🏎 **Optimized performance** (server-side data fetching, caching)

## 📦 Installation & Setup
1. **Clone the repository**:
   ```sh
   git https://github.com/RomanCzujko/blog-n15-ts-redux-tail.git
   cd blog-n15-ts-redux-tail
   ```
2. **Install dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the development server**:
   ```sh
   npm run dev
   ```
   Then visit: `http://localhost:3000`

## 🚀 Deployment
To deploy the application to **Vercel**, run:
```sh
vercel
```
Or push to GitHub, and set up **Vercel Auto Deployment**.

## 📂 Folder Structure
```
/src
  ├── app
  │   ├── page.tsx  # Home Page
  │   ├── post/[id]/page.tsx  # Post Detail Page
  ├── components
  │   ├── Header.tsx
  │   ├── PostCard.tsx
  │   ├── PostSlider.tsx
  │   ├── Categories.tsx
  ├── hooks
  │   ├── useFetchPosts.ts  # API Hook
  ├── store
  │   ├── store.ts
  │   ├── postsSlice.ts
  ├── styles
  │   ├── globals.css
```

## 📌 TODO
- [ ] Implement user authentication
- [ ] Add comments system
- [ ] Improve SEO & OpenGraph meta tags

---
🎉 **Happy Coding!** 🚀

