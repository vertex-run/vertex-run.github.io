// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Vertex',
      description: 'The Vertex language tour and reference',
      social: [],
      sidebar: [
        { label: 'Introduction', link: '/' },
        {
          label: 'Language Tour',
          autogenerate: { directory: 'tour' },
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Basics',
              autogenerate: { directory: 'reference/basics' },
            },
            {
              label: 'Expressions',
              autogenerate: { directory: 'reference/expressions' },
            },
            {
              label: 'Statements',
              items: [
                { label: 'Control Flow', link: 'reference/control-flow' },
                { label: 'for..in Loop', link: 'reference/for-in' },
              ],
            },
            {
              label: 'Functions & Types',
              items: [
                { label: 'Functions', link: 'reference/functions' },
                { label: 'Sum Types', link: 'reference/sum-types' },
                { label: 'Pattern Matching', link: 'reference/pattern-matching' },
                { label: 'Tuples', link: 'reference/tuples' },
                { label: 'Type Aliases', link: 'reference/type-aliases' },
                { label: 'Opaque Types', link: 'reference/opaque-types' },
              ],
            },
            {
              label: 'Data',
              items: [
                { label: 'Option<T>', link: 'reference/option' },
                { label: 'Result<T, E>', link: 'reference/result' },
                { label: 'Collections', link: 'reference/collections' },
              ],
            },
            {
              label: 'Modules',
              items: [
                { label: 'Annotations', link: 'reference/annotations' },
                { label: 'Imports', link: 'reference/imports' },
              ],
            },
            {
              label: 'Tooling',
              items: [
                { label: 'Testing', link: 'reference/testing' },
              ],
            },
            {
              label: 'Salesforce',
              items: [
                { label: 'Salesforce Integration', link: 'reference/salesforce-integration' },
                { label: 'Apex FFI', link: 'reference/apex-ffi' },
              ],
            },
            {
              label: 'Standard Library',
              autogenerate: { directory: 'reference/stdlib' },
            },
            {
              label: 'Appendix',
              items: [
                { label: 'Compiler Diagnostics', link: 'reference/diagnostics' },
                { label: 'Current Limitations', link: 'reference/limitations' },
              ],
            },
          ],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
