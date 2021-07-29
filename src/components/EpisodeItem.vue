<template>
  <v-card class="d-flex mx-10 my-2 px-5 py-2" flat outlined>
    <v-list-item-title class="">
      <slot name="episodeNumber"></slot>
      <slot name="episodeName"></slot>
    </v-list-item-title>
    <v-list-item-subtitle class="d-flex justify-end">
      <slot name="episodeDate"></slot>
    </v-list-item-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
