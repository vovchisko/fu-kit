// rollup.config.js
import path       from 'path'
import vue        from 'rollup-plugin-vue'
import alias      from '@rollup/plugin-alias'
import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import replace    from '@rollup/plugin-replace'
import PostCSS    from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import minimist   from 'minimist'

const argv = minimist(process.argv.slice(2))

const projectRoot = path.resolve(__dirname, '.')

const baseConfig = {
  input: 'src/entry.js',
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${ path.resolve(projectRoot, 'src') }`,
          },
        ],
      }),
    ],
    replace: {
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    vue: {
      preprocessStyles: true,
    },
    postVue: [
      resolve({
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.vue' ],
      }),
      // Process only `<style module>` blocks.
      PostCSS({
        modules: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
        include: /&module=.*\.css$/,
      }),
      // Process all `<style>` blocks except `<style module>`.
      PostCSS({ include: /(?<!&module=.*)\.css$/ }),
      commonjs(),
    ],
  },
}

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
]

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
}

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    input: 'src/entry.esm.js',
    external,
    output: {
      file: 'dist/fu-kit.esm.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
    ],
  }
  buildFormats.push(esConfig)
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/fu-kit.ssr.js',
      format: 'cjs',
      name: 'FuKit',
      exports: 'auto',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
    ],
  }
  buildFormats.push(umdConfig)
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/fu-kit.min.js',
      format: 'iife',
      name: 'FuKit',
      exports: 'auto',
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  }
  buildFormats.push(unpkgConfig)
}

// Export config
export default buildFormats
