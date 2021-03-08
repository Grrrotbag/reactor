<template>
  <h1>Reactor</h1>
  <button @click="start">start</button>
  <Block v-if="isPlaying" />
  <Results />
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
      delay: 0,
      isPlaying: false,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 6000;
      this.isPlaying = true;
      console.log(this.delay);
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
