import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Progetto (Case Study)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Progetto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'string',
    }),
    defineField({
      name: 'sector',
      title: 'Settore',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tag/Servizi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'summary',
      title: 'Riassunto breve',
      type: 'text',
    }),
    defineField({
      name: 'challenge',
      title: 'La Sfida',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'La Soluzione',
      type: 'text',
    }),
    defineField({
      name: 'results',
      title: 'Risultati',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Immagine di Copertina',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
