'use client';

import {useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.3 14.6A8.5 8.5 0 0 1 9.4 3.7 8.5 8.5 0 1 0 20.3 14.6Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.1" />
      <path d="M12 19.1v2.1" />
      <path d="M4.2 4.2l1.5 1.5" />
      <path d="M18.3 18.3l1.5 1.5" />
      <path d="M2.8 12h2.1" />
      <path d="M19.1 12h2.1" />
      <path d="M4.2 19.8l1.5-1.5" />
      <path d="M18.3 5.7l1.5-1.5" />
    </svg>
  );
}

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

  const isDark = ready && theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white/80 text-stone-600 shadow-sm backdrop-blur transition hover:border-stone-300 hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-600/40 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-300 dark:hover:border-white/20 dark:hover:text-white"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
