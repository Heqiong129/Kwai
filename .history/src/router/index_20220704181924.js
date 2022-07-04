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
        component: () => import("../views/NewsList/BaiduNews.vue"),
      },
      {
        path: "关注",
        component: () => import("../views/NewsList/WangyiNews.vue"),
      },
      {
        path: "发现",
        component: () => import("../views/NewsList/WangyiNews.vue"),
      },
      {
        path: "同城",
        component: () => import("../views/NewsList/WangyiNews.vue"),
      },
      {
        path: "放映厅",
        component: () => import("../views/NewsList/WangyiNews.vue"),
      },
      {
        path: "找工作",
        component: () => import("../views/NewsList/WangyiNews.vue"),
      },
      {
        path: "长视频",
        component: () => import("../views/NewsList/WangyiNews.vue"),
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
