'use client';

import Image from 'next/image';
import {useState} from 'react';
import ResponseCard from '@/components/ResponseCard';
import SearchBox from '@/components/SearchBox';
import ThemeToggle from '@/components/ThemeToggle';
import {TeaserMessage, teaserMessages} from '@/data/teaserMessages';

function HeartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mx-1 inline h-3.5 w-3.5 align-[-0.16em] text-amber-700 dark:text-amber-200"
      fill="currentColor"
    >
      <path d="M12 21s-7.2-4.4-9.6-8.8C.5 8.8 2.3 4.8 6.1 4.3c2.1-.3 4.1.8 5.2 2.5 1.1-1.7 3.1-2.8 5.2-2.5 3.8.5 5.6 4.5 3.7 7.9C19.2 16.6 12 21 12 21Z" />
    </svg>
  );
}

export default function HomePage() {
  const [selectedMessage, setSelectedMessage] = useState<TeaserMessage | null>(
    null
  );

  function chooseRandomMessage() {
    const randomIndex = Math.floor(Math.random() * teaserMessages.length);
    setSelectedMessage(teaserMessages[randomIndex]);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fff8ed_0%,#ffffff_38%,#f8f4ee_100%)] px-5 py-6 text-stone-950 transition-colors dark:bg-[radial-gradient(circle_at_top,#1b1711_0%,#090807_42%,#020202_100%)] dark:text-white sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-100/30 to-transparent dark:from-amber-300/5" />

      <div className="relative mx-auto flex w-full max-w-6xl justify-end">
        <ThemeToggle />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col items-center justify-center pb-12 pt-10 text-center">
        <div className="mb-10 flex justify-center">
          <Image
            src="/logo.png"
            alt="Naralimon"
            width={360}
            height={140}
            priority
            className="h-auto w-[230px] sm:w-[300px] md:w-[360px]"
          />
        </div>

        <p className="max-w-2xl text-balance text-sm uppercase tracking-[0.34em] text-stone-500 dark:text-stone-400">
          Costa del Sol, selected with better taste
        </p>

        <h1 className="mt-7 max-w-3xl text-balance text-3xl font-light tracking-[-0.035em] text-stone-950 dark:text-[#f7f1e8] sm:text-4xl md:text-5xl">
          A finer way to ask the coast is coming.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-stone-600 dark:text-stone-400 sm:text-lg">
          Naralimon is preparing a quieter, sharper way to discover the Costa
          del Sol’s better possibilities.
        </p>

        <SearchBox onSubmit={chooseRandomMessage} />

        <ResponseCard message={selectedMessage} />
      </section>

      <footer className="relative mx-auto max-w-6xl pb-5 text-center text-xs leading-6 text-stone-500 dark:text-stone-500">
        <p>
          naralimon.es brought to you with <HeartIcon /> by Naralimon, Mijas
          Costa (Málaga) · Developed by{' '}
          <a
            href="https://sienda.co.uk"
            target="_blank"
            rel="noreferrer"
            className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950 dark:text-stone-300 dark:decoration-white/20 dark:hover:text-white"
          >
            Sienda Ltd
          </a>
          , London UK
        </p>
      </footer>
    </main>
  );
}
