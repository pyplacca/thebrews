import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

function setPageTitle(title) {
  return () => {
    document.title = `${title ? title + " | " : ""}Wilson & Eyra`;
  };
}

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: setPageTitle(""),
    },

    {
      path: "/rsvp",
      name: "rsvp",
      component: () => import("@/views/RSVP.vue"),
      beforeEnter: setPageTitle("RSVP"),
    },

    {
      path: "/story",
      name: "story",
      component: () => import("@/views/Story.vue"),
      beforeEnter: setPageTitle("Story"),
    },

    {
      path: "/album",
      name: "album",
      component: () => import("@/views/Album.vue"),
      beforeEnter: setPageTitle("Album"),
    },
  ],
});
