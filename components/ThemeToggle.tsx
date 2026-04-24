'use client';

import {useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('naralimon-theme');

    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }

    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    window.localStorage.setItem('naralimon-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full border border-stone-200/80 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-600 shadow-sm backdrop-blur transition hover:border-stone-300 hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-600/40 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-300 dark:hover:border-white/20 dark:hover:text-white"
    >
      {ready && theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
