import { createMemoryHistory, createRouter } from "vue-router";
import Landing from "../pages/LandingView.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
