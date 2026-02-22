// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/ui', 'nuxt-og-image'],
  css: ['~/assets/css/main.css'],
//   site: { 
//  url: 'https://example.com', 
//  name: 'My Awesome Website' 
//  }, 
  fonts: {
    families: [
      {name: "Poppins", weights: [400, 700], global: true},
      {name: "Oswald", weights: [400, 700], global: true},
      {name: "Noto Sans Devanagari", weights: [400, 700], global: true},
    ]
  },
  ogImage: {
    debug: true
  }
})
