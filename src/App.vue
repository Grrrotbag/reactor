<template>
  <div class="flex bg-gray-500">
    <h1>Reactor</h1>
    <button class="rounded" @click="start" :disabled="isPlaying">start game</button>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
