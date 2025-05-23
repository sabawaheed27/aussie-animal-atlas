# React + Vite
This project is a responsive Australian Zoo Website built with React and React Router. It features dark mode, responsive layout switching (desktop vs. mobile), dynamic routing, and well-structured component organization. The desktop version includes a vertical icon-based navigation bar for quick access to different animal categories.


# 🦘 Australian Zoo React SPA

This is a responsive, multi-page, built with **React** and **React Router**. The app showcases animals from an Australian Zoo, organized by categories: mammals, birds, and reptiles. It supports **light/dark mode**, **modal dialogs**, and **responsive layouts** for desktop and mobile.

---

## 🚀 Features

- 🌙 **Dark Mode** toggle with persistent local storage
- 🖥️ **Responsive Layouts** for desktop and mobile
- 🐾 **Dynamic animal information** with modal detail view
- 🎨 **Scoped Styling** via CSS Modules
- 🔒 Reusable modal using native `<dialog>` with controlled visibility

---

## 🧱 Project Structure

```bash
src/
├── App.tsx                         # Main entry point with global state and routes
├── components/
│   ├── Header.jsx                 # Site logo and name
│   ├── Footer.jsx                 # Footer section
│   ├── MainContent.jsx           # Central display logic for animals
│   └── LongDescription/          # Modal popup with full animal info
│       └── DialogModal.jsx       # Reusable dialog component
├── Layout/
│   ├── AppLayoutWrapper.jsx      # Common layout wrapper for routing
│   ├── DesktopView.jsx           # Icon-based vertical nav for desktop
│   └── MobileView.jsx            # Hamburger nav for mobile
├── styles/
│   ├── desktopView.module.css
│   ├── mobileView.module.css
│   └── main-content.module.css
