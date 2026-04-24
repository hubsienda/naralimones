import type {TeaserMessage} from '@/data/teaserMessages';

type ResponseCardProps = {
  message: TeaserMessage | null;
};

export default function ResponseCard({message}: ResponseCardProps) {
  if (!message) {
    return (
      <div className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-stone-500 dark:text-stone-500">
        Naralimon is listening. The answer is not quite ready yet.
      </div>
    );
  }

  return (
    <section
      aria-live="polite"
      className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-stone-200/80 bg-white/78 p-7 text-left shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:shadow-darkSoft sm:p-8"
    >
      <div className="space-y-7">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-amber-800/80 dark:text-amber-200/80">
            English
          </p>
          <p className="text-lg leading-8 text-stone-900 dark:text-stone-100">
            {message.english}
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent dark:via-white/12" />

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-amber-800/80 dark:text-amber-200/80">
            Español
          </p>
          <p className="text-lg leading-8 text-stone-900 dark:text-stone-100">
            {message.spanish}
          </p>
        </div>
      </div>
    </section>
  );
}
