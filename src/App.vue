<template>
  <div class="flex items-center justify-center container flex-col">
    <h1 class="text-5xl font-black font-sans mb-7">Reactor</h1>
    <button
      class="w-40 bg-blue-500 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
      @click="start"
      :disabled="isPlaying"
    >
      start game
    </button>
    <Block v-if="isPlaying" :delay="delay" @end="end" />
    <Results v-if="showResults" :delay="delay" :score="score" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      delay: null,
      isPlaying: false,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 6000;
      this.isPlaying = true;
      this.showResults = false;
    },
    end(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style></style>
