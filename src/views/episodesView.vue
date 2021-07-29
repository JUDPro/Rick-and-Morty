<template>
  <div>
    <v-card-actions class="d-flex justify-space-between mx-10">
      <div>button</div>
      <div>button</div>
      <div>button</div>
    </v-card-actions>
    <episodeItem v-for="item in episodeList" :key="item.index">
      <span slot="episodeNumber">
        {{ item.episode }}
      </span>
      <span slot="episodeName">
        {{ item.name }}
      </span>
      <span slot="episodeDate">
        {{ item.air_date }}
      </span>
    </episodeItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import episodeItem from "../components/EpisodeItem.vue";

export default Vue.extend({
  components: {
    episodeItem,
  },
  data() {
    return {
      episodeList: {},
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => (this.episodeList = response.data.results));
  },
});
</script>
