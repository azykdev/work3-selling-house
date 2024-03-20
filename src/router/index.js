import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/",
    component: () => import("@/layouts/auth.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/auth/login-view.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/register-view.vue"),
      },
      
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/authority.vue"),
    children: [
      {
        path: "/home_authority",
        name: "home_authority",
        component: () => import("@/views/authority/authority-view.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/citizen.vue"),
    children: [
      {
        path: "/home_citizen",
        name: "home_citizen",
        component: () => import("@/views/citizen/citizen-view.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/construction-company.vue"),
    children: [
      {
        path: "/home_construction_company",
        name: "home_construction_company",
        component: () => import("@/views/construction-company/construction-company-view.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
