<template>
  <div>
    <div 
      v-for="(experience, index) in experiences"
      class="flex"
      :key="experience"
      ref="experienceBox"
    >
      <div class="mr-2">
        <div class="circle"></div>
        <div class="line" :style="{ height: lineHeight[index] + 'px' }"></div>
      </div>

      <div class="-mt-1 pb-4">
        <a href="/">{{ experience.position }}, {{ experience.company_name }}</a>
        <br>
        <i>{{ experience.start_date }} - {{ experience.end_date }}</i>
        <p class="mt-2 max-w-xl">{{ experience.description }}</p>
        <ul v-for="stack in experience.stack" 
          aria-label="Technologies Used"
          :key="stack"
          class="inline-block mt-3 mr-1.5">
            <li>{{ stack }}</li>
        </ul>
      </div>
    </div>
  </div>
  <router-link to="/" class="accent-text">Visit Blog</router-link>
</template>


<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import experiences from '../data/experience.json';

const experienceBox: Ref<number[]> = ref([]);
const lineHeight: Ref<number[]> = ref([]);

onMounted(() => {
  getExperienceBoxHeight();
});

const getExperienceBoxHeight = () => {
  experienceBox.value.forEach((box:number, i:number) => {
    if (box) {
      lineHeight.value[i] = box.clientHeight + 5;
    }
  });
};
</script>


<style lang="scss" scoped>
ul {
  background-color: var(--light-light-accent-color);
  padding: 4px 15px;
  color: var(--light-accent-color);
  border-radius: 15px;
  font-size: 12px;
  li{
    font-weight: 700;
  }
}

.circle {
  width: 12px;
  height: 12px;
  background-color: var(--light-accent-color);
  border-radius: 50%;
}

.line {
  width: 2px;
  background-color: var(--light-accent-color);
  margin: 0 auto;
  display: block;
}
</style>
