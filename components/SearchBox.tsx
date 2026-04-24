'use client';

import {FormEvent, useState} from 'react';

type SearchBoxProps = {
  onSubmit: (query: string) => void;
};

export default function SearchBox({onSubmit}: SearchBoxProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    onSubmit(trimmedQuery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="naralimon-search" className="sr-only">
        Ask Naralimon
      </label>

      <input
        id="naralimon-search"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ask the Costa del Sol..."
        autoComplete="off"
        className="min-h-14 flex-1 rounded-full border border-stone-200 bg-white px-6 text-base text-stone-950 shadow-soft outline-none transition placeholder:text-stone-400 focus:border-amber-700/40 focus:ring-4 focus:ring-amber-600/10 dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:shadow-darkSoft dark:placeholder:text-stone-500 dark:focus:border-amber-400/40 dark:focus:ring-amber-300/10"
      />

      <button
        type="submit"
        className="min-h-14 rounded-full bg-stone-950 px-7 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-stone-800 focus:outline-none focus:ring-4 focus:ring-amber-600/20 dark:bg-[#f4eadb] dark:text-stone-950 dark:hover:bg-white dark:focus:ring-amber-300/20"
      >
        Ask
      </button>
    </form>
  );
}
