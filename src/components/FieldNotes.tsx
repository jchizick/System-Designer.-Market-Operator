import React from 'react';
import { Link } from 'react-router-dom';
import { formatFieldNoteDate, getLatestFieldNotes } from '../lib/fieldNotes';

export function FieldNotes() {
  const notes = getLatestFieldNotes(4);

  return (
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">002 // FIELD NOTES</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <Link to="/field-notes" className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0">
          VIEW ALL NOTES
          <span className="text-[10px]">&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {notes.map((note) => (
          <Link key={note.slug} to={`/field-notes/${note.slug}`} className="border-l border-emerald-500/40 pl-4 py-2 flex flex-col group cursor-pointer hover:border-emerald-500 transition-colors bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04]">
            <div className="text-mono-xs text-text-secondary mb-1.5">
              LOG ENTRY &mdash; {formatFieldNoteDate(note.date, 'short')}
            </div>
            <p className="field-note-card__excerpt text-mono-label text-white/60 group-hover:text-white/80 transition-colors flex-1">
              {note.excerpt}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono tracking-wider text-text-secondary transition-colors mt-1">
                #{note.tag}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
