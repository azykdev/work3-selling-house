import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/home/home-view.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "404",
  //   component: () => import("@/views/error/404-view.vue"),
  // },
  // {
  //   path: "/choose_account",
  //   name: "choose_account",
  //   component: () => import("@/views/auth/choose-account-view.vue"),
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/auth/login-view.vue"),
  // },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: () => import("@/views/auth/register-view.vue"),
  // },
  // {
  //   path: "/home_authority",
  //   name: "home_authority",
  //   component: () => import("@/views/authority/authority-view.vue"),
  //   children: [
  //     {
  //       path: "/create_tender",
  //       name: "create_tender",
  //       component: () => import("@/views/authority/create-tender.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/home_citizen",
  //   name: "home_citizen",
  //   component: () => import("@/views/citizen/citizen-view.vue"),
  // },
  // {
  //   path: "/home_construction_company",
  //   name: "home_construction_company",
  //   component: () => import("@/views/construction-company/construction-company-view.vue"),
  // },

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
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
