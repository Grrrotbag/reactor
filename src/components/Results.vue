<template>
  <div>
    <h2>These are the results:</h2>
    <ul>
      <li>The box appeared after: <strong>{{ ((delay % 60000) / 1000).toFixed(2) }} seconds</strong></li>
      <li>You reacted in <strong>{{score}}ms</strong>. That is <strong>{{ ((score % 60000) / 1000).toFixed(2) }} seconds</strong>.</li>
    </ul>
    <p>{{ ranking }}</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: ['delay', 'score'],
  data() {
    return {
      ranking: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.ranking = "Superb reactions. You are a zen master."
      } else if (this.score > 250) {
        this.ranking = "Were you asleep?"
        }
  },
};
</script>

<style>
ul {
  list-style-type: none;
  }
</style>
