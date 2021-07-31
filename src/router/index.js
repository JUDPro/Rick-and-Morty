import Vue from "vue";
import VueRouter from "vue-router";
import episodesList from "../views/EpisodesList.vue";
import charactersList from "../views/CharactersList.vue";
import locationsView from "../views/LocationsView.vue";
import episode from "../views/Episode.vue";
import character from "../views/Character.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/charactersList",
  },
  {
    path: "/episodeList",
    name: "episodeList",
    component: episodesList,
  },
  {
    path: "/episode/:id",
    name: "episode",
    component: episode,
    props: true,
  },
  {
    path: "/charactersList",
    name: "charactersList",
    component: charactersList,
  },
  {
    path: "/character/:id",
    name: "character",
    component: character,
    props: true,
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
