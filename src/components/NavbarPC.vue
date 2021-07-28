<template>
  <v-main>
    <v-toolbar color="#3949AB" dark dense>
      <v-card-text class="text-md-h5 text-sm-h6">
        Rick and Morty
      </v-card-text>
      <v-tabs class="d-flex justify-end mr-4">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab
          class="text-md-h6 text-sm-h6"
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </v-main>
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
