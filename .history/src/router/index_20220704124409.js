import { createRouter, createWebHashHistory } from "vue-router";
import FeaturedeView from "../views/FeaturedView.vue";

const routes = [
  {
    path: "/",
    name: "featured",
    component: FeaturedeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
