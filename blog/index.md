---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Oluwaseyi's Blog"
  tagline: I'll be writing a little bit of everything here but mostly about Frontend Engineering
  actions:
    - theme: brand
      text: Technical Articles
      link: /markdown-examples
    - theme: alt
      text: Others
      link: /api-examples

---

<ArticlesList />


<script setup>
import ArticlesList from '../src/components/articles.vue'
</script>
