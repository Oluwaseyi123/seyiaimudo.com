<template>
  <div class="md:flex mb-5 w-5/7 project-group" v-for="project in projects" :key="project.project_name">
    <img :src="project.img" alt="project_img" class="project-image mr-3 rounded">
    <div>
      <a href="/">{{ project.project_name }}</a>
      <p class="mt-2 max-w-lg">{{ project.project_description }}</p>
      <ul 
        v-for="stack in project.stack" 
        aria-label="Technologies Used"
        :key="stack"
        class="inline-block mt-3 mr-1.5">
        <li>{{ stack }}</li>
      </ul>
    </div>
  </div>

  <router-link to="/" class="accent-text">View Full Projects Archive</router-link>
</template>

<script setup lang="ts">
import projects from '../data/projects'
</script>

<style lang="scss" scoped>
.project-image {
  width: 144px;       
  height: 96px;      
  object-fit: cover; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

ul {
  background-color: var(--light-light-accent-color);
  padding: 4px 10px;
  color: var(--light-accent-color);
  border-radius: 15px;
  font-size: 10px;
  transition: background-color 250ms;

  li {
    transition: background-color 250ms;
    font-weight: 700;
  }
}

.project-group {
  cursor: pointer;
  transition: background-color 450ms, padding 450ms;
}
</style>
