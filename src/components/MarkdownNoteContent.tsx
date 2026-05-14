import React from 'react';

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-text-primary font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="border border-border-subtle bg-bg-base px-1.5 py-0.5 text-emerald-400">
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export function MarkdownNoteContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="field-note-content flex min-w-0 max-w-full flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-mono-base text-emerald-400 uppercase mt-3 max-w-full break-words">
              {block.replace(/^### /, '')}
            </h3>
          );
        }

        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-heading-sm text-text-primary mt-4 max-w-full break-words">
              {block.replace(/^## /, '')}
            </h2>
          );
        }

        if (block.split(/\r?\n/).every((line) => line.startsWith('- '))) {
          return (
            <ul key={index} className="flex min-w-0 max-w-full flex-col gap-2 pl-1">
              {block.split(/\r?\n/).map((line) => (
                <li key={line} className="flex min-w-0 gap-3 text-body-base">
                  <span className="mt-[9px] flex-shrink-0 text-[6px] text-emerald-500/50">+</span>
                  <span className="min-w-0">{renderInlineMarkdown(line.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-mono-sm text-white/70 max-w-[80ch] break-words">
            {renderInlineMarkdown(block)}
          </p>
        );
      })}
    </div>
  );
}
