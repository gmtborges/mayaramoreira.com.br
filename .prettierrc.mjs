/** @type {import('prettier').Config} */
export default {
  proseWrap: 'always',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
