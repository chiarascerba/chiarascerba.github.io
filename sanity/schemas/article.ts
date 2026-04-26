import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Articolo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testata',
      title: 'Testata',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Data di pubblicazione',
      type: 'date',
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract/Riassunto',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Link Esterno',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
