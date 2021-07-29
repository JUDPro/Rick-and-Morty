<template>
  <v-card>
    <v-card-title class="d-flex justify-center">
      Name of episode: {{ episodeData.name }}
      <v-card-text class="d-flex justify-center">
        Season: {{ sliceSeason }} Episode:
        {{ sliceEpisodeNumber }}
      </v-card-text>
      <v-card-subtitle>{{ episodeData.air_date }}</v-card-subtitle>
    </v-card-title>
    <v-container v-for="item in listCharacter" :key="item.index" fluid>
      <cardOfCharacter
        :urlImg="item.data.image"
        :nameCharacter="item.data.name"
      ></cardOfCharacter>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import cardOfCharacter from "../components/cardOfCharacter.vue";

export default Vue.extend({
  props: ["id"],
  components: {
    cardOfCharacter,
  },
  data() {
    return {
      episodeData: {},
      sliceSeason: "",
      sliceEpisodeNumber: "",
      listCharacter: [],
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/episode/" + this.id)
      .then((response) => {
        this.episodeData = response.data;
        this.sliceSeason = response.data.episode.slice(2, -3);
        this.sliceEpisodeNumber = response.data.episode.slice(4);
        const list = response.data.characters.map((url: any) => axios.get(url));
        Promise.all(list).then((response: any) => {
          this.listCharacter = response;
        });
      });
  },
});
</script>
