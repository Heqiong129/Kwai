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
    children: [
      {
        path: "friend",
        component: () => import("../views/HomeList/friendHome.vue"),
      },
      {
        path: "follow",
        component: () => import("../views/HomeList/followHome.vue"),
      },
      {
        path: "find",
        component: () => import("../views/HomeList/findHome.vue"),
      },
      {
        path: "sameCity",
        component: () => import("../views/HomeList/sameCityHome.vue"),
      },
      {
        path: "projectionHall",
        component: () => import("../views/HomeList/projectionHallHome.vue"),
      },
      {
        path: "jobHunting",
        component: () => import("../views/HomeList/jobHuntingHome.vue"),
      },
      {
        path: "longVideo",
        component: () => import("../views/HomeList/longVideoHome.vue"),
      },
    ],
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
