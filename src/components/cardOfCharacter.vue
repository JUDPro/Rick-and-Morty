<template>
  <v-row justify="space-around">
    <v-col style="cursor: pointer" cols="5">
      <v-img
        :src="urlImg"
        height="250px"
        width="180px"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title v-text="nameCharacter"></v-card-title>
      </v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    urlImg: {
      type: String,
      default: "",
    },
    nameCharacter: {
      type: String,
      default: "",
    },
  },
});
</script>
