
<template>
  <div class="md:flex mb-5  w-5/7 project-group" v-for="project in projects" :key="project.project_name">
    <img src="../assets/images/food.jpg" alt="project_img" class="w-56 md:w-36 md:h-24 mr-3 rounded lg:w-36 lg:h-20">
    <div>
      <a href="/">{{project.project_name}}</a>
      <p class="mt-2 max-w-lg" >{{project.project_description}}</p>
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
import projects from '../data/projects.json'
</script>

<style lang="scss" scoped>
ul {
  background-color: var(--light-light-accent-color);
  padding: 4px 15px;
  color: var(--light-accent-color);
  border-radius: 15px;
  font-size: 12px;
  transition: background-color 250ms;
  li{
    transition: background-color 250ms;
    font-weight: 700;
  }
}

.project-group{
  cursor: pointer;
  transition: background-color 450ms;
  transition: padding 450ms;
  // &:hover{
  //   background-color: var(--light-light-accent-color);
  //   border-radius: 5px;
  //   transition: background-color 250ms;
  //   transition: padding 250ms;
  //   a{
  //     color:var(--light-accent-color);
  //   }
  //   ul{
  //     background-color: var(--light-accent-color);
  //     li{
  //       color:  var(--light-light-accent-color);
  //     }
  //   }
  // }
}

p{
  font-size: 14px;
}
</style>