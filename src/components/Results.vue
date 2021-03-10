<template>
  <div>
    <ul>
      <li>
        The box appeared after:
        <strong>{{ ((delay % 60000) / 1000).toFixed(2) }} seconds</strong>
      </li>
      <li>
        You reacted in <strong>{{ score }}ms</strong>. That is
        <strong>{{ ((score % 60000) / 1000).toFixed(2) }} seconds</strong>.
      </li>
    </ul>
    <p class="text-xl font-bold">{{ ranking }}</p>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["delay", "score"],
  data() {
    return {
      ranking: null,
    };
  },
  mounted() {
    if (this.score < 150) {
      this.ranking = "Woah. You must have cheated you're so fast!";
    } else if (this.score < 250) {
      this.ranking = "Superb reactions. You are a zen master.";
    } else if (this.score < 350) {
      this.ranking = "Not too shabby.";
    } else if (this.score < 450) {
      this.ranking = "Getting a little slow in your old age?";
    } else {
      this.ranking = "What, were you asleep or something?";
    }
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
