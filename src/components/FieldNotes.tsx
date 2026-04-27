import React from 'react';

const notes = [
  {
    date: "MAR 28",
    text: "Most traders don't fail from lack of knowledge. They fail from lack of execution discipline."
  },
  {
    date: "MAR 14",
    text: "Signal degradation occurs when the system attempts to optimize for too many variables simultaneously."
  },
  {
    date: "FEB 02",
    text: "A robust system survives its operator's worst days. If it requires constant intervention, it's not a system."
  }
];

export function FieldNotes() {
  return (
    <section className="mb-10">
      <div className="text-mono-xs text-emerald-400 mb-2">
        002 // FIELD NOTES
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, idx) => (
        <div key={idx} className="border-l border-emerald-500/40 pl-4 py-2 flex flex-col group cursor-pointer hover:border-emerald-500 transition-colors bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04]">
          <div className="text-mono-xs text-text-secondary mb-1.5">
            LOG ENTRY &mdash; {note.date}
          </div>
          <p className="text-body-sm group-hover:text-white/80 transition-colors">
            {note.text}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
}
