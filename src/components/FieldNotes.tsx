import React from 'react';

const notes = [
  {
    date: "MAR 28",
    text: "Most traders don't fail from lack of knowledge. They fail from lack of execution discipline.",
    tags: ["#execution"]
  },
  {
    date: "MAR 14",
    text: "Signal degradation occurs when the system attempts to optimize for too many variables simultaneously.",
    tags: ["#signal"]
  },
  {
    date: "FEB 02",
    text: "A robust system survives its operator's worst days. If it requires constant intervention, it's system.",
    tags: ["#robustness"]
  },
  {
    date: "JAN 19",
    text: "Edge isn't found in complexity. It's found in the discipline to repeat a simple process when everything.",
    tags: ["#edge"]
  }
];

export function FieldNotes() {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-mono-xs text-emerald-400 flex-shrink-0">002 // FIELD NOTES</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
        <a href="#" className="text-mono-xs text-emerald-500 hover:text-emerald-400 transition-colors tracking-[0.08em] flex items-center gap-1.5 flex-shrink-0">
          VIEW ALL NOTES
          <span className="text-[10px]">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {notes.map((note, idx) => (
          <div key={idx} className="border-l border-emerald-500/40 pl-4 py-2 flex flex-col group cursor-pointer hover:border-emerald-500 transition-colors bg-emerald-500/[0.02] hover:bg-emerald-500/[0.04]">
            <div className="text-mono-xs text-text-secondary mb-1.5">
              LOG ENTRY &mdash; {note.date}
            </div>
            <p className="text-mono-label text-white/60 group-hover:text-white/80 transition-colors flex-1">
              {note.text}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {note.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono tracking-wider text-text-secondary transition-colors mt-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
