import React, { Template } from 'react'
//


export default {
  siteRoot: 'http://joshuar.com/',

  getSiteData: async () => ({
    title: 'JOSHUAR 🦁',
  }),

  devServer: {
    port: 3000,
    host: '127.0.0.1',
  },

  plugins: [
    'react-static-plugin-reach-router'
  ],

  getRoutes: async () => [
    {
      path: '/',
      template: 'src/containers/about',
    },
    {
      path: 'design',
      template: 'src/containers/design',
    },
    {
      path: 'design/hilights',
      template: 'src/containers/design/hilights',
    },
    {
      path: 'design/lumen',
      template: 'src/containers/design/lumen',
    },
    {
      path: 'design/idealist',
      template: 'src/containers/design/idealist',
    },
    {
      path: 'code',
      template: 'src/containers/code',
    },
    {
      path: 'stories',
      template: 'src/containers/stories',
    },    
    {
      path: 'stories/aila',
      template: 'src/containers/stories/aila.js',
    },
    {
      path: '404',
      template: 'src/containers/404',
    },
  ]
}
