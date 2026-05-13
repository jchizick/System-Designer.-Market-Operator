import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Footer } from './Footer';
import { MarkdownNoteContent } from './MarkdownNoteContent';
import { formatFieldNoteDate, getFieldNoteBySlug } from '../lib/fieldNotes';

export function FieldNotePage() {
  const { slug } = useParams();
  const note = slug ? getFieldNoteBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!note) {
    return (
      <div className="min-h-screen flex flex-col relative p-6">
        <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto justify-center">
          <span className="text-mono-xs text-emerald-400 mb-4">FIELD NOTE NOT FOUND</span>
          <h1 className="text-heading-lg mb-6">No log entry at this coordinate.</h1>
          <Link to="/field-notes" className="text-mono-xs text-text-secondary hover:text-emerald-500 transition-colors">
            RETURN_TO_FIELD_NOTES
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative p-6">
      <header className="flex justify-between items-center pb-3 border-b border-border-subtle mb-8 text-mono-xs text-text-secondary w-full max-w-5xl mx-auto">
        <Link to="/field-notes" className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer group">
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">&larr;</span>
          <span>RETURN_TO_FIELD_NOTES</span>
        </Link>
        <div className="flex gap-6 items-center">
          <span className="text-emerald-500">PAGE:</span>
          <span>LOG ENTRY</span>
          <span className="hidden sm:inline text-text-secondary/30">|</span>
          <span className="hidden sm:inline text-text-secondary/40">#{note.tag}</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto">
        <article className="mb-12">
          <div className="border-b border-border-subtle pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-mono-xs text-text-primary">
                [{formatFieldNoteDate(note.date)}]
              </span>
              <span className="text-mono-xs text-emerald-400">#{note.tag}</span>
            </div>
            <h1 className="text-display">{note.title}</h1>
          </div>

          <MarkdownNoteContent content={note.content} />
        </article>

        <Link
          to="/field-notes"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle hover:border-emerald-500 hover:text-emerald-500 transition-colors text-mono-xs tracking-widest uppercase w-fit group mb-12"
        >
          BACK TO ARCHIVE
          <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
      </main>

      <Footer />
    </div>
  );
}
