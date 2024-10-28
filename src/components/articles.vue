<template>
    <div>
    <div 
      v-for="(article, index) in articles"
      class="flex"
      :key="article"
    >
      <div class="pb-6">
        <a class="underline" :href="article.url" target="blank">{{ article.title }}</a> <br>
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
    <a href="http://localhost:5174" class="accent-text" target="_blank" rel="noopener noreferrer">Visit Blog</a>
  </div>
 
</template>

<script setup lang="ts">
import articles from '../data/articles.json'
</script>