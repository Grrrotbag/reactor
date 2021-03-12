<template>
  <header>
    <h1>Reactor</h1>
    <hr />
  </header>
  <main>
    <h4 class="subheading">
      Reactor is a game to test your reaction speed. When you click the start button, a timer will begin to countdown.
      This timer will be random &mdash; between 2 and 6 seconds. At the end of the timer, an atom will appear on screen.
      Click at as soon as you see it.
    </h4>
    <GkButton @click="start" :disabled="isPlaying" text="start" bgColor="#ef897f" />

    <Atom v-if="isPlaying" :delay="delay" @end="end" />
    <Results v-if="showResults" :delay="delay" :score="score" />
  </main>
</template>

<script>
import Atom from "./components/Atom.vue";
import Results from "./components/Results.vue";
import GkButton from "gk-button";

export default {
  name: "App",
  components: {
    Atom,
    Results,
    GkButton,
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
  background: linear-gradient(-90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 1em 0;
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
</style>
