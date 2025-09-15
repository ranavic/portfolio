import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

const App: React.FC = () => {
  const [theme, toggleTheme, isMounted] = useDarkMode();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    // Only render when the theme is mounted to avoid a flash of unstyled content
    <div className="App" style={{ visibility: isMounted ? 'visible' : 'hidden' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
