<template>
  <header>
    <h1>Reactor</h1>
    <!-- <hr /> -->
  </header>
  <main>
    <button @click="start" :disabled="isPlaying">
      start game
    </button>
    <Block v-if="isPlaying" :delay="delay" @end="end" />
    <Results v-if="showResults" :delay="delay" :score="score" />
  </main>
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
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 760px;
  margin: auto;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 1em;
  background: linear-gradient(to right, #a3ddc7 0%, #fdffc6 50%, #ef897f 100%);
  text-transform: uppercase;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
hr {
  margin: 0;
  align-self: stretch;
  margin-bottom: 1em;
}
button {
  background-color: #4caf50;
  /* background: linear-gradient(to right, #a3ddc7 0%, #fdffc6 50%, #ef897f 100%); */
  border: none;
  color: ivory;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1em;
  transition-duration: 0.4s;
}
button:disabled {
  background: gray;
  color: darkgray;
}
button:enabled:hover {
  background-color: green;
  /* background: linear-gradient(to right, #a2ccb6 0%, #fceeb5 50%, #ee786e 100%); */
}
</style>
