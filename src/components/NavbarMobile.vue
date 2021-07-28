<template>
  <v-main style="overflow: hidden">
    <v-toolbar color="#3949AB" dark dense>
      <v-container class="d-flex justify-space-between align-center">
        <v-card-title primary-title>
          Rick and Morty
        </v-card-title>
        <v-app-bar-nav-icon @click="drawer = true">
          <v-icon size="40">mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </v-container>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-title class="text-sm-h5 text-xs-h5">{{
              item
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: null,
      items: ["seasons", "characters", "locations"],
    };
  },
});
</script>
