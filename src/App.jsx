import { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import AppLayoutWrapper from "./Layout/AppLayoutWrapper";
import MainContent from './components/MainContent';



function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAnimal, setShowAnimal] = useState(null);
  const [category, setCategory] = useState("home");
  const [alreadyClicked, setAlreadyClicked] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const props = { showAnimal,setShowAnimal,setCategory, alreadyClicked, setAlreadyClicked,
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Routes>
        <Route
          element={
            <AppLayoutWrapper
              setShowAnimal={setShowAnimal}
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
              darkMode={darkMode}
            />
          }
        >
          <Route path="/" element={<MainContent {...props} category="home" />} />
          <Route path="mammals" element={<MainContent {...props} category="mammals" />} />
          <Route path="birds" element={<MainContent {...props} category="birds" />} />
          <Route path="reptiles" element={<MainContent {...props} category="reptiles" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
