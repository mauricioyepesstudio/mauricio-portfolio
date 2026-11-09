import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });
const config = [
  // This legacy file contains a shell command, not JavaScript source.
  { ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'scripts/sync-projects.js'] },
  ...compat.extends('next/core-web-vitals'),
  { rules: { 'react/no-unescaped-entities': 'off', '@next/next/no-img-element': 'off' } },
];
export default config;
