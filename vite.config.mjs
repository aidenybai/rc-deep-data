import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';

const rcOnlyPlugins = [
  react({
    babel: {
      plugins: [['babel-plugin-react-compiler', {}]],
    },
  }),
  Inspect(),
];

const millionOnlyPlugins = [MillionLint.vite(), react(), Inspect()];

const defaultPlugins = [react()];

export default defineConfig({
  plugins: process.env.RC_ONLY
    ? rcOnlyPlugins
    : process.env.MILLION_ONLY
    ? millionOnlyPlugins
    : defaultPlugins,
});
