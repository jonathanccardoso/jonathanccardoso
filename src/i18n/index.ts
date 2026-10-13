import { pt } from './pt';
import { en } from './en';

export const languages = { pt: 'Português', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';
export const langs = Object.keys(languages) as Lang[];

/** BCP-47 / Open Graph locales per language. */
export const locales: Record<Lang, { html: string; og: string }> = {
  pt: { html: 'pt-BR', og: 'pt_BR' },
  en: { html: 'en', og: 'en_US' },
};

export const ui = { pt, en } as const;
export type UiKey = keyof typeof pt;

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** Reads the language from the first path segment (/pt/..., /en/...). Falls back to the default. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

/** Translates a UI key; falls back to the default language. */
export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

/** Removes the language prefix: '/pt/about/' -> '/about/'; '/en/' -> '/'. */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (!isLang(first)) return pathname || '/';
  return '/' + rest.join('/');
}

/** Builds a localized path: localizedPath('en', 'about') -> '/en/about/'; localizedPath('pt') -> '/pt/'. */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Same page in another language (swaps the prefix). Pages with different slugs per language must pass their own path. */
export function getAlternatePath(url: URL, targetLang: Lang): string {
  return localizedPath(targetLang, stripLang(url.pathname));
}
