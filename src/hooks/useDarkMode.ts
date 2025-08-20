import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useDarkMode = (): [Theme, () => void, boolean] => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    setTheme(localTheme || (prefersDark ? 'dark' : 'light'));
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }, [theme, isMounted]);

  return [theme, toggleTheme, isMounted];
};