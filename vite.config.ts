import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default ({mode}:{mode: any}) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    // build: {
    //   rollupOptions: {
    //     external: ["jss-plugin-globalThis"],
    //   },
    // },
    // define: {
    //   global: {},
    // },
    plugins: [
      react()
    ],
    envDir: './',
    envPrefix: 'VITE_',
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, './')}`,
      }
    }
    // esbuild: {
    //   loader: 'jsx',
    //   include: /src\/.*\.jsx?$/,
    //   exclude: [],
    // },
    // optimizeDeps: {
    //     esbuildOptions: {
    //         plugins: [
    //             {
    //                 name: 'load-js-files-as-jsx',
    //                 setup(build) {
    //                     build.onLoad(
    //                         { filter: /src\\.*\.js$/ },
    //                         async (args) => ({
    //                             loader: 'jsx',
    //                             contents: await fs.readFile(args.path, 'utf8'),
    //                         })
    //                     );
    //                 },
    //             },
    //         ],
    //     },
    // },
  })
}