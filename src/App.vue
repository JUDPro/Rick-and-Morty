<template>
  <v-app app>
    <navbarpc v-if="!isMobile"></navbarpc>
    <navbarmobile v-if="isMobile"></navbarmobile>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import navbarpc from "./components/NavbarPC.vue";
import navbarmobile from "./components/NavbarMobile.vue";

export default Vue.extend({
  components: {
    navbarpc,
    navbarmobile,
  },
  data() {
    return {
      info: {},
    };
  },
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {},
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => (this.info = response));
    console.log(this.info);
  },
});
</script>
