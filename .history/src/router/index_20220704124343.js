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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
