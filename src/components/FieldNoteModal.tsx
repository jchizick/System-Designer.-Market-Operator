import React, { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { FieldNote, formatFieldNoteDate } from '../lib/fieldNotes';
import { MarkdownNoteContent } from './MarkdownNoteContent';

interface FieldNoteModalProps {
  note: FieldNote | null;
  onClose: () => void;
}

export function FieldNoteModal({ note, onClose }: FieldNoteModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!note) {
      return;
    }

    const previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [note, onClose]);

  if (!note) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10020] flex items-center justify-center overflow-x-hidden bg-black/72 px-3 py-4 backdrop-blur-md sm:px-6 sm:py-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex max-h-[calc(100dvh-32px)] w-[min(100%,48rem)] max-w-[calc(100vw-24px)] min-w-0 flex-col overflow-hidden border border-emerald-500/35 bg-bg-base/95 shadow-[0_0_50px_rgba(16,185,129,0.12)] sm:max-h-[min(86vh,760px)] sm:max-w-3xl"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(16,185,129,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.4)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative flex min-h-11 items-center justify-between gap-3 border-b border-emerald-500/25 bg-emerald-500/[0.035] px-3 sm:px-4">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden text-mono-xs">
            <span className="flex-shrink-0 text-emerald-400">FIELD NOTE</span>
            <span className="text-text-secondary/30">/</span>
            <span className="min-w-0 truncate text-text-secondary">LOG ENTRY</span>
            <span className="hidden text-text-secondary/30 sm:inline">/</span>
            <span className="hidden truncate text-text-secondary sm:inline">#{note.tag}</span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close field note"
            onClick={onClose}
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center border border-emerald-500/25 text-text-secondary transition-colors hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative min-w-0 overflow-y-auto overflow-x-hidden px-4 py-5 sm:px-7 sm:py-7">
          <div className="mb-6 border-b border-border-subtle pb-5">
            <div className="mb-4 flex min-w-0 flex-wrap items-center gap-3">
              <span className="text-mono-xs text-text-primary whitespace-nowrap">
                [{formatFieldNoteDate(note.date)}]
              </span>
              <span className="min-w-0 break-words text-mono-xs text-emerald-400">#{note.tag}</span>
            </div>
            <h2 id={titleId} className="text-heading-lg max-w-full break-words">
              {note.title}
            </h2>
          </div>

          <MarkdownNoteContent content={note.content} />
        </div>

        <footer className="relative border-t border-emerald-500/20 bg-black/30 px-4 py-3 text-mono-xs text-text-secondary/55 sm:px-7">
          Press ESC or click outside to close
        </footer>
      </article>
    </div>
  );
}
