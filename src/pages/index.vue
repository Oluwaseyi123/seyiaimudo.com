<template>
  <div class="lg:flex lg:justify-between lg:items-start p-6 bg-gray-100 rounded-lg shadow-md">
    <div class="mb-5 text-left lg:mr-10 lg:w-6/12">
      <img class="profile-photo" :src="profilePhoto" alt="profile-photo">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mt-4">
        <router-link to="/">Oluwaseyi Aimudo</router-link>
      </h1>
      <h2 class="mt-2 text-lg font-medium tracking-tight sm:text-xl">Frontend Engineer</h2>
      <p class="mt-4 text-justify text-gray-700">
        Hi! I am Aimudo Oluwaseyi, a software engineer currently living in
        Manchester. I have experience building small, medium, and large-scale
        interfaces.
      </p>

      <app-socials class="mt-8" />
    </div>

    <div class="lg:w-6/12 text-left">
      <div class="flex flex-wrap mb-5">
        <button
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
          class="mr-3 mb-3 p-2 rounded-md border border-transparent hover:border-gray-300 transition-all duration-200"
        >
          {{ tab }} 
        </button>
      </div>

      <div class="overflow-scroll component-container bg-white rounded-lg shadow p-4">
        <KeepAlive>
          <component :is="tabs[currentTab]"></component>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import About from '../components/about.vue';
import AppFooter from '../components/app-footer.vue';
import AppSocials from '../components/app-socials.vue';
import Articles from '../components/articles.vue';
import Experience from '../components/experience.vue';
import Projects from '../components/projects.vue';
import profilePhoto from '../assets/images/profilephoto.jpeg';

const tabs = {
  About,
  Experience,
  Projects,
  Articles
};

type TabName = keyof typeof tabs;

const savedTab = (localStorage.getItem('selectedTab') as TabName) || 'About';
const currentTab = ref<TabName>(savedTab);

watch(currentTab, (newTab) => {
  localStorage.setItem('selectedTab', newTab);
});

onMounted(() => {
  if (tabs[savedTab]) {
    currentTab.value = savedTab;
  }
});
</script>

<style lang="scss" scoped>
.profile-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--light-accent-color); 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tab-button {
  display: inline-block;
  position: relative;
  z-index: 2;
  transition: color 0.2s ease-in-out;
  background: transparent;
  color: var(--dark-text-color);
}

.tab-button:hover,
.tab-button.active {
  color: var(--light-accent-color);
}

.tab-button::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  bottom: -45px;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1);
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B stroke:%23E74C3C; stroke-width:2; stroke-linecap:square; %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 40 40 40 Q 60 40 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")
    0px 50% / 80px 80px repeat-x;
}

.tab-button:hover::before,
.tab-button.active::before {
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: waving 3s linear infinite;
}

@keyframes waving {
  to {
    background-position: 80px 50%, 160px 50%;
  }
}

.component-container {
  height: 40em;
  border-radius: 0.5rem;
}

.component-container::-webkit-scrollbar {
  display: none;
}

.component-container {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>
