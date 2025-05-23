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
 🧱 Project Structure
src/
├── assets/                 # Images and other static assets
├── components/             # Reusable components
│   ├── Description/        # Short and long animal descriptions
│   ├── DialogModal/        # Reusable modal component
│   ├── Footer/             # Page footer
│   ├── Header/             # Site logo and title
│   ├── MainContent/        # Displays selected animal info
│   ├── Sidebar/            # Animal list by category
│   ├── SidebarButton/      # Sidebar toggler for mobile
│   └── WelcomeMsg/         # Welcome message per category
│
├── data/                   # Static animal/category data
│
├── Layout/                 # Layout components
│   ├── DesktopView/        # Desktop navbar + routing
│   ├── MobileView/         # Responsive nav + toggler
│   └── AppLayoutWrapper.jsx# Combines layout views with Header/Footer
│
├── utils/                  # Utility functions
│   └── functions.js        # getImageURL and more
│
├── App.jsx                 # Main component with routes + global state
├── main.jsx                # Entry point
├── index.css               # Global styles
└── index.html              # HTML template
