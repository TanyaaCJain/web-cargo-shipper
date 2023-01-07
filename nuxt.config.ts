// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    'nuxt-icons',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['store'],
  },
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/fluid_typography.scss',
    '~/assets/styles/typography.scss',
    '~/assets/styles/grid.scss',
    '~/assets/styles/buttons.scss',
    '~/assets/styles/inputs.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_colors.scss" as *;'
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      googleMapsToken: process.env.GOOGLE_MAPS_TOKEN || ""
    }
  }
})
