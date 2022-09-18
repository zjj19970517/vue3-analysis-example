import { createRouter, createWebHistory } from "vue-router";
import demo1 from "../views/effect/ExampleItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/reactivity",
      name: "reactivity",
      component: () => import("../views/reactivity/ExampleItem1.vue"),
    },
    {
      path: "/effect",
      name: "effect",
      component: demo1,
    },
  ],
});

export default router;
