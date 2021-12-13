import colors from 'vuetify/es5/util/colors'
import { defineNuxtConfig } from '@nuxt/bridge'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-bridge-test-4',
    title: 'nuxt-bridge-test-4',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Khand:wght@700&family=Roboto:wght@400;500;700;900",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuetify/lib/styles/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuetify"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modulildes for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
   // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      sass: {
        // @ts-ignore
        additionalData: "@import '@/assets/styles/vuetify.scss'",
      },
    },
  },
  bridge: {
    // Use Vite as the bundler instead of Webpack 4
    vite: true,
    // Enable Nuxt 3 compatible useMeta
    meta: true,
  },

  vite: {
    // Config for Vite
  },
})
