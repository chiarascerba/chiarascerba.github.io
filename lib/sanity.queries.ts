import { groq } from 'next-sanity';

export const articlesQuery = groq`
  *[_type == "article"] | order(date desc) {
    "id": _id,
    title,
    "testate": testata,
    date,
    "category": category->title,
    abstract,
    url,
    featured
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    "id": _id,
    "slug": slug.current,
    title,
    client,
    sector,
    year,
    tags,
    summary,
    challenge,
    solution,
    results,
    "coverImage": coverImage.asset->url
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    client,
    sector,
    year,
    tags,
    summary,
    challenge,
    solution,
    results,
    "coverImage": coverImage.asset->url
  }
`;
