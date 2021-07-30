<template>
  <div>
    <v-card-actions class="d-flex justify-space-between mx-10 px-5">
      <div>Episode</div>
      <div v-if="!isMobile">Season</div>
      <div v-if="!isMobile">Date</div>
    </v-card-actions>
    <episodeItem v-for="item in episodeList" :key="item.index">
        <span
          slot="episodeName"
          style="cursor: pointer"
          @click="goToEpisodeData(item)"
        >
        <v-card flat>
          {{ item.name }}
        </v-card>
        </span>
      <span slot="seasonNumber">
        {{ item.episode.slice(2, -3) }}
      </span>
      <span slot="episodeNumber">
        {{ item.episode.slice(4) }}
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
  methods: {
    goToEpisodeData(item: any) {
      this.$router
        .push({ path: "/episode/" + item.id, params: item.id })
        .catch(() => {});
    },
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
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => (this.episodeList = response.data.results));
  },
});
</script>
