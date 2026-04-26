import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'u71i3zyz';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Chiara Scerba CMS',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
