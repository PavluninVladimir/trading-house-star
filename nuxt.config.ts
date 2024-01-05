// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  // "graphql-client": {
  //   codegen: {
  //     avoidOptionals: true
  //   }
  // },
  // modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss','@vueuse/nuxt','@vite-pwa/nuxt', '@nuxtjs/apollo'],
  modules: ['@nuxtjs/tailwindcss','@vueuse/nuxt','@vite-pwa/nuxt', '@nuxtjs/apollo'],
  // proxy: {
  //   '/proxy/query': {
  //     target: 'http://localhost:8181/query',
  //     changeOrigin: false,
  //   }
  // },
  pwa: {
    registerType: 'autoUpdate',
    // workbox: {
    //   globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    // },
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'maskable_icon_x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'maskable_icon_x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable_icon_x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    // client: {
    //   installPrompt: true,
    //   // you don't need to include this: only for testing purposes
    //   // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    //   periodicSyncForUpdates: 20,
    // },
    // devOptions: {
    //   enabled: true,
    //   // suppressWarnings: true,
    //   // navigateFallbackAllowlist: [/^\/$/],
    //   type: 'module',
    // },
  },
  // runtimeConfig: {
  //   public: {
  //     GQL_HOST: 'http://localhost:8080/query' // overwritten by process.env.GQL_HOST
  //   }
  // },
  apollo: {
    clients: {
      default: {
        httpEndpoint: '/proxy/query',
        connectToDevTools: true,
        inMemoryCacheOptions: {}
      }
    },
  },
  routeRules: {
    '/proxy/query': { proxy: 'http://127.0.0.1:8181/query' },
  },
  app: {
    head: {
      link: [{
          rel: 'icon', type:'image/png', href: '/maskable_icon_x512.png',
      },
        {
          rel: 'icon', type:'image/png', href: '/maskable_icon_x512.png'
        }
      ]
    }
  }
})
