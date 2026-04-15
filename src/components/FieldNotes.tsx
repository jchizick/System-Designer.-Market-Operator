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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {notes.map((note, idx) => (
        <div key={idx} className="border-l border-accent-green/40 pl-4 py-1 flex flex-col group cursor-pointer hover:border-accent-green transition-colors">
          <div className="font-mono text-[10px] text-text-secondary/60 mb-1.5">
            LOG ENTRY &mdash; {note.date}
          </div>
          <p className="text-[13px] text-text-secondary leading-[1.5] group-hover:text-text-primary transition-colors">
            {note.text}
          </p>
        </div>
      ))}
    </section>
  );
}
