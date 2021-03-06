import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import strip from '@rollup/plugin-strip'
import sass from 'rollup-plugin-sass'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve({extensions}),
    commonjs({
      include: '/node_modules/**',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    sass({
      output: true,
    }),
    strip(),
    url(),
    svgr(),
  ],
}
