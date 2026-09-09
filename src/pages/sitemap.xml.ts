import type { APIRoute } from 'astro';
import { locales, url } from '@/data/site';
import { coreSlugs, guides, articles } from '@/data/content';
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('http://localhost:4328');
  const slugs = [...coreSlugs,...guides.map(g=>`docs/${g.slug}`),...articles.map(a=>`updates/${a.slug}`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${locales.flatMap(lang=>slugs.map(slug=>`<url><loc>${new URL(url(lang,slug),origin).href}</loc>${locales.map(alternate=>`<xhtml:link rel="alternate" hreflang="${alternate==='en'?'en':'zh-CN'}" href="${new URL(url(alternate,slug),origin).href}"/>`).join('')}</url>`)).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
