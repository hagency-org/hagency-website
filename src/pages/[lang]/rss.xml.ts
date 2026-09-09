import type { APIRoute } from 'astro';
import { locales, t, url, type Locale } from '@/data/site';
import { articles } from '@/data/content';
export const getStaticPaths = () => locales.map(lang => ({ params: { lang } }));
const escape = (value: string) => value.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char]!));
export const GET: APIRoute = ({ params, site }) => {
  const lang = params.lang as Locale;
  const origin = site ?? new URL('http://localhost:4328');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Hagency</title><link>${new URL(url(lang,'updates'),origin).href}</link><language>${lang==='en'?'en':'zh-CN'}</language><description>${lang==='en'?'Ideas and stories from the Hagency ecosystem':'Hagency 生态的理念与故事'}</description>${articles.map(article => { const link = new URL(url(lang,`updates/${article.slug}`),origin).href; return `<item><title>${escape(t(article.title,lang))}</title><link>${link}</link><guid>${link}</guid><description>${escape(t(article.description,lang))}</description><pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate></item>`; }).join('')}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
