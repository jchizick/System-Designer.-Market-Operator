import React, { useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Footer } from './Footer';
import { formatFieldNoteDate, getAllFieldNotes } from '../lib/fieldNotes';
import { FieldNoteModal } from './FieldNoteModal';

export function FieldNotesArchivePage() {
  const notes = getAllFieldNotes();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get('note');
  const selectedNote = selectedSlug ? notes.find((note) => note.slug === selectedSlug) ?? null : null;

  const openNote = useCallback((slug: string) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('note', slug);
    setSearchParams(nextParams);
  }, [searchParams, setSearchParams]);

  const closeNote = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('note');
    setSearchParams(nextParams);
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative max-w-full overflow-x-hidden p-4 sm:p-6">
      <header className="flex flex-wrap justify-between gap-x-4 gap-y-2 pb-3 border-b border-border-subtle mb-8 text-mono-xs text-text-secondary w-full max-w-5xl mx-auto">
        <Link to="/" className="flex min-w-0 items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer group">
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">&larr;</span>
          <span className="truncate">RETURN_TO_TERMINAL</span>
        </Link>
        <div className="flex min-w-0 flex-wrap items-center justify-start gap-x-3 gap-y-1 sm:justify-end sm:gap-x-6">
          <span className="text-emerald-500">PAGE:</span>
          <span>FIELD NOTES</span>
          <span className="hidden sm:inline text-text-secondary/30">|</span>
          <span className="hidden sm:inline text-text-secondary/40">{notes.length} ENTRIES</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto min-w-0">
        <section className="mb-10">
          <div className="flex items-center mb-5">
            <span className="text-mono-xs px-2.5 py-1 border border-emerald-400/30 text-emerald-400 bg-emerald-400/5">
              [Field Notes]
            </span>
            <span className="text-mono-xs text-text-secondary/40 border border-l-0 border-border-subtle px-2.5 py-1">
              STATIC OPERATOR LOG
            </span>
          </div>
          <h1 className="text-display mb-4">Operator Log</h1>
          <p className="text-body-lg max-w-[680px]">
            Observations on systems, trading, psychology, design, and execution.
          </p>
        </section>

        <section className="border-y border-emerald-500/20 bg-bg-surface/40 mb-12">
          {notes.map((note) => (
            <button
              key={note.slug}
              type="button"
              onClick={() => openNote(note.slug)}
              className="group grid w-full min-w-0 grid-cols-1 md:grid-cols-[170px_1fr_90px] gap-3 md:gap-6 px-3 sm:px-4 md:px-0 py-5 md:py-6 border-b border-dotted border-emerald-500/20 last:border-b-0 hover:bg-emerald-500/[0.035] hover:border-emerald-500/35 transition-colors text-left focus:outline-none focus:bg-emerald-500/[0.05] focus:border-emerald-400/50"
            >
              <div className="flex min-w-0 items-center justify-between gap-4 text-mono-xs md:block">
                <span className="text-text-primary whitespace-nowrap">
                  [{formatFieldNoteDate(note.date)}]
                </span>
                <span className="min-w-0 truncate text-text-secondary md:hidden">
                  #{note.tag}
                </span>
              </div>
              <div className="min-w-0">
                <h2 className="text-mono-base text-emerald-400 group-hover:text-emerald-300 transition-colors mb-2 break-words">
                  {note.title}
                </h2>
                <p className="text-body-sm max-w-[720px] break-words">
                  {note.excerpt}
                </p>
              </div>
              <div className="hidden md:block text-mono-xs text-text-secondary md:text-right">
                #{note.tag}
              </div>
            </button>
          ))}
        </section>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle hover:border-emerald-500 hover:text-emerald-500 transition-colors text-mono-xs tracking-widest uppercase w-fit group mb-12"
        >
          HOME
          <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
      </main>

      <Footer />
      <FieldNoteModal note={selectedNote} onClose={closeNote} />
    </div>
  );
}
