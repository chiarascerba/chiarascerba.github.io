import { client } from '@/lib/sanity.client';
import { articlesQuery } from '@/lib/sanity.queries';
import HomeContent from './HomeContent';

export const dynamic = 'force-static';

export default async function HomePage() {
  const articles = await client.fetch(articlesQuery);
  const featuredArticles = articles.filter((a: any) => a.featured).slice(0, 3);

  return <HomeContent featuredArticles={featuredArticles} />;
}
