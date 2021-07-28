<template>
  <v-app app>
    <navbarpc v-if="!isMobile"></navbarpc>
    <navbarmobile v-if="isMobile"></navbarmobile>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import navbarpc from "./components/NavbarPC.vue";
import navbarmobile from "./components/NavbarMobile.vue";

export default Vue.extend({
  components: {
    navbarpc,
    navbarmobile,
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
  mounted() {},
});
</script>
