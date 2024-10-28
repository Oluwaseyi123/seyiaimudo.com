import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/index.vue"),
  },
  {path: "/:pathMatch(.*)*", 
  name: 'NotFound',
  component: () => import("../pages/not-found.vue") }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
