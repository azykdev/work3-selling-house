import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/home-view.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/login-view.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/auth/register-view.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("@/views/error/404-view.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/authority.vue"),
    children: [
      {
        path: "authority/dashboard",
        name: "authority_dashboard",
        component: () =>
          import("@/views/authority/authority-dashboard-view.vue"),
      },
      {
        path: "authority/new-tender",
        name: "authority_new_tender",
        component: () => import("@/views/authority/new-tender-view.vue"),
      },
      {
        path: "authority/victory-tender",
        name: "authority_victory_tender",
        component: () => import("@/views/authority/victory-tender-view.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
