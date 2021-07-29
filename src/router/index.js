import Vue from "vue";
import VueRouter from "vue-router";
import episodesView from "../views/episodesView.vue";
import charactersView from "../views/charactersView.vue";
import locationsView from "../views/locationsView.vue";
import episode from "../views/episode.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/episodeList",
  },
  {
    path: "/episodeList",
    name: "episodeList",
    component: episodesView,
  },
  {
    path: "/episode/:id",
    name: "episode",
    component: episode,
    props: true,
  },
  {
    path: "/characters",
    name: "characters",
    component: charactersView,
  },
  {
    path: "/locations",
    name: "locations",
    component: locationsView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
