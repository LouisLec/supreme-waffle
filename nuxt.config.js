export default {
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  modules: ["@nuxtjs/strapi"],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    jit: true
  },
  storybook: {
    stories: [
      '~/components/**/*.stories.mdx'
    ],
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-docs'
    ]
  },
  strapi: {
    url: "http://localhost:1337",
    entities: [{name: 'pages', type:'collection'}, {name: 'categories', type:'collection'}]
  },
  components: true
};
