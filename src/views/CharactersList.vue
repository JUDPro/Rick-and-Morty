<template>
  <v-row>
    <v-col
      class="col-md-3"
      v-for="item in charactersList"
      :key="item.index"
      @click="goToCharacterData(item)"
    >
      <card-of-character :urlImg="item.image" :nameCharacter="item.name">
        <span slot="statusCharacter">{{ item.status }}</span>
        <span slot="speciesCharacter">{{ item.species }}</span>
      </card-of-character>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import cardOfCharacter from "../components/CardOfCharacter.vue";
export default Vue.extend({
  components: {
    cardOfCharacter,
  },
  data() {
    return {
      charactersList: {},
    };
  },
  methods: {
    goToCharacterData(item: any) {
      this.$router
        .push({ path: "/character/" + item.id, params: item.id
        })
        .catch(() => {});
    },
  },
  mounted() {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      this.charactersList = response.data.results;
    });
  },
});
</script>
