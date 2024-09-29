<template>
    <div>
    <div 
      v-for="(article, index) in articles"
      class="flex"
      :key="article"
      ref="articleBox"
    >
      <div class="pb-6">
        <a class="underline" :href="article.url" target="blank">{{ article.title }}</a>
        <h3 class="underline"></h3>
        <i>{{ article.date }} 
          <span v-for="tag in article.tags" :key="tag">
          #{{ tag }} 
          </span> 
        </i>
        <p class="mt-3">{{ article.description }}</p>
        <div>
        </div>
      </div>
    </div>
  </div>

    <router-link to="/" class="accent-text">Visit Blog</router-link>
</template>

<script setup lang="ts">
import articles from '../data/articles.json'
</script>