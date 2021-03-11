<template>
  <header>
    <h1>Reactor</h1>
    <!-- <hr /> -->
  </header>
  <main>
    <h4 class="subheading">
      Reactor is a game to test your reaction speed. When you click the start button, a timer will begin to countdown.
      This timer will be random &mdash; between 2 and 6 seconds. At the end of the timer, an atom will appear on screen.
      Click at as soon as you see it.
    </h4>

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
@import url("https://fonts.googleapis.com/css2?family=Atomic+Age&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: #fff;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
header {
  font-family: "Atomic Age", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 1em;
  text-transform: uppercase;
}
main {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 760px;
  height: 100vh;
  margin: auto;
}
.subheading {
  margin-bottom: 1em;
}
button {
  background-color: #ef897f;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
  background-color: #ef899f;
  /* background: linear-gradient(to right, #a2ccb6 0%, #fceeb5 50%, #ee786e 100%); */
}
</style>
