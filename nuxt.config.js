export default {
  head: {
    title: 'portfolio',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
      }
    ]
  },
 
  css: [
    '~/assets/scss/colors.scss',
    '~/assets/scss/global.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  axios: {},

  build: {
  }
}
