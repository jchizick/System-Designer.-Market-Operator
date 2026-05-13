export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
}

type FieldNoteFrontmatter = Omit<FieldNote, 'slug' | 'content'>;

const noteModules = import.meta.glob<string>('../../content/field-notes/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const requiredFrontmatterFields = ['title', 'date', 'tag', 'excerpt'] as const;
const frontmatterLinePattern = /^([A-Za-z][\w-]*):\s*"([^"]*)"\s*$/;
const fieldNoteDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const fieldNoteTagPattern = /^[a-z0-9-]+$/i;

function filenameFromPath(path: string): string {
  return path.split('/').pop() ?? path;
}

function isProcessableMarkdown(path: string): boolean {
  const filename = filenameFromPath(path);
  return filename.endsWith('.md') && !filename.startsWith('.') && !filename.startsWith('_');
}

function fieldNoteError(path: string, message: string): Error {
  return new Error(`Invalid field note frontmatter in ${filenameFromPath(path)}: ${message}`);
}

function parseFrontmatter(raw: string, path: string): { data: FieldNoteFrontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw fieldNoteError(path, 'expected opening and closing "---" fences.');
  }

  const frontmatterLines = match[1].split(/\r?\n/).filter((line) => line.trim().length > 0);
  const frontmatter = frontmatterLines.reduce<Record<string, string>>((acc, line, index) => {
    const trimmedLine = line.trim();
    const lineMatch = trimmedLine.match(frontmatterLinePattern);

    if (!lineMatch) {
      throw fieldNoteError(path, `line ${index + 2} must be formatted as key: "single-line value".`);
    }

    const [, key, value] = lineMatch;

    if (acc[key]) {
      throw fieldNoteError(path, `duplicate "${key}" field.`);
    }

    acc[key] = value;
    return acc;
  }, {});

  const missingKey = requiredFrontmatterFields.find((key) => !frontmatter[key]);

  if (missingKey) {
    throw fieldNoteError(path, `missing required "${missingKey}" field.`);
  }

  if (!fieldNoteDatePattern.test(frontmatter.date)) {
    throw fieldNoteError(path, 'date must use YYYY-MM-DD format.');
  }

  if (!fieldNoteTagPattern.test(frontmatter.tag)) {
    throw fieldNoteError(path, 'tag must contain only letters, numbers, or hyphens.');
  }

  return {
    data: {
      title: frontmatter.title,
      date: frontmatter.date,
      tag: frontmatter.tag,
      excerpt: frontmatter.excerpt,
    },
    content: match[2].trim(),
  };
}

function slugFromPath(path: string): string {
  return filenameFromPath(path).replace(/\.md$/, '');
}

const fieldNotes = Object.entries(noteModules)
  .filter(([path]) => isProcessableMarkdown(path))
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw, path);

    return {
      slug: slugFromPath(path),
      content,
      ...data,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllFieldNotes(): FieldNote[] {
  return fieldNotes;
}

export function getLatestFieldNotes(limit = 4): FieldNote[] {
  return fieldNotes.slice(0, limit);
}

export function getFieldNoteBySlug(slug: string): FieldNote | undefined {
  return fieldNotes.find((note) => note.slug === slug);
}

const monthLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function getDateParts(date: string): { year: string; month: string; day: string } {
  const [year, month, day] = date.split('-');

  return {
    year,
    month: monthLabels[Number(month) - 1] ?? month,
    day,
  };
}

export function formatFieldNoteDate(date: string, variant: 'short' | 'long' = 'long'): string {
  const { year, month, day } = getDateParts(date);

  if (variant === 'short') {
    return `${month} ${Number(day)}`;
  }

  return `${month}. ${Number(day)}. ${year}`;
}
