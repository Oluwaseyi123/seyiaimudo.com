import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oluwaseyis Blog",
  description: "Oluwaseyis Blog",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
     
    ],
    sidebar: [
      {
        text: 'Technical Articles',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Tools to boost productivity as a frontend developer', link: '/technical-articles/frontend-developer-productivity-tools' },
          // { text: 'Accessing Deeply Nested Components in Vue', link: '/technical-articles/accessing-deeply-nested-components-vue/' },
          // { text: 'Everything you need to know abput deleting branches in Git', link: '/technical-articles/accessing-deeply-nested-components-vue/' }
        ]
      },
      {
        text: 'Random thoughts',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Tools to boost productivity as a frontend developer', link: '/frontend-developer-productivity-tools' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
})
