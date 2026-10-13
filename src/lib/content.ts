import { getCollection, type CollectionEntry } from 'astro:content';
import { localizedPath, type Lang } from '../i18n';

export type BlogPost = CollectionEntry<'blog'>;
export type WorkItem = CollectionEntry<'work'>;

/** Entry id is "pt/my-post": the slug is the part after the language folder. */
export function entrySlug(entry: { id: string }): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Published posts written in a language (used for article routes), newest first. Drafts are excluded. */
export async function getOwnBlogPosts(lang: Lang): Promise<BlogPost[]> {
  const posts = await getCollection('blog', (p) => p.data.lang === lang && !p.data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Posts for listings, newest first: the language's own posts plus posts from the other
 * language that have no translation here (shown linked to their original language).
 */
export async function getBlogPosts(lang: Lang): Promise<BlogPost[]> {
  const all = await getCollection('blog', (p) => !p.data.draft);
  const translated = new Set(
    all.filter((p) => p.data.lang === lang && p.data.translationKey).map((p) => p.data.translationKey),
  );
  const posts = all.filter(
    (p) => p.data.lang === lang || !p.data.translationKey || !translated.has(p.data.translationKey),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Cases for a language, sorted by `order` (ascending). */
export async function getWorkItems(lang: Lang): Promise<WorkItem[]> {
  const items = await getCollection('work', (w) => w.data.lang === lang);
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** Estimated reading time in minutes (min 1), ~200 words per minute. */
export function readingTime(body: string | undefined, wordsPerMinute = 200): number {
  const words = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Alternate-language paths for an entry (to pass as `alternates` to BaseLayout).
 * Includes the current language; other languages only when a translation exists (same translationKey).
 */
export async function getAlternates(
  collection: 'blog' | 'work',
  entry: BlogPost | WorkItem,
): Promise<Partial<Record<Lang, string>>> {
  const section = collection;
  const alternates: Partial<Record<Lang, string>> = {
    [entry.data.lang]: localizedPath(entry.data.lang, `${section}/${entrySlug(entry)}`),
  };
  const key = entry.data.translationKey;
  if (!key) return alternates;
  const all = (await getCollection(collection)) as (BlogPost | WorkItem)[];
  for (const other of all) {
    if (other.data.lang === entry.data.lang || other.data.translationKey !== key) continue;
    if (collection === 'blog' && (other as BlogPost).data.draft) continue;
    alternates[other.data.lang] = localizedPath(other.data.lang, `${section}/${entrySlug(other)}`);
  }
  return alternates;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

export const slugifyTag = (tag: string) =>
  tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Unique tags with counts, most used first. */
export function collectTags(posts: BlogPost[]): { tag: string; slug: string; count: number }[] {
  const map = new Map<string, { tag: string; slug: string; count: number }>();
  for (const p of posts)
    for (const tag of p.data.tags) {
      const slug = slugifyTag(tag);
      const cur = map.get(slug);
      if (cur) cur.count++;
      else map.set(slug, { tag, slug, count: 1 });
    }
  return [...map.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const POSTS_PER_PAGE = 10;
