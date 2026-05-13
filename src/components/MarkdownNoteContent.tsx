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
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-mono-base text-emerald-400 uppercase mt-3">
              {block.replace(/^### /, '')}
            </h3>
          );
        }

        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-heading-sm text-text-primary mt-4">
              {block.replace(/^## /, '')}
            </h2>
          );
        }

        if (block.split(/\r?\n/).every((line) => line.startsWith('- '))) {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-1">
              {block.split(/\r?\n/).map((line) => (
                <li key={line} className="flex gap-3 text-body-base">
                  <span className="text-emerald-500/50 mt-[9px] text-[6px]">+</span>
                  <span>{renderInlineMarkdown(line.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-body-base text-white/70 max-w-[720px]">
            {renderInlineMarkdown(block)}
          </p>
        );
      })}
    </div>
  );
}
