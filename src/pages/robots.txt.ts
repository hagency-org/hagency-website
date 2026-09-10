import type { APIRoute } from 'astro';
import { asset } from '@/data/site';
export const GET: APIRoute = ({ site }) => new Response(site?.protocol === 'https:' ? `User-agent: *\nAllow: /\nSitemap: ${new URL(asset('sitemap.xml'),site).href}\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
