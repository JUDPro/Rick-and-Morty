<template>
  <v-app app>
    <v-main>
      <v-toolbar color="#3949AB" class="d-flex align-center flex-column" dark>
        <v-toolbar-title class="text-md-h4 text-sm-h5">Rick and Morty</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              class="text-md-h5 text-sm-h6 font-weight-regular"
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>

        <v-app-bar-nav-icon>
          <v-icon size="35">mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </v-toolbar>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      items: ["seasons", "characters", "locations"],
    };
  },
});
</script>
