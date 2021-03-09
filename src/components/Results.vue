<template>
  <div>
    <h2>These are the results:</h2>
    <ul>
      <li>The box appeared after: <strong>{{ ((delay % 60000) / 1000).toFixed(2) }} seconds</strong></li>
      <li>You reacted in <strong>{{score}}ms</strong>. That is <strong>{{ ((score % 60000) / 1000).toFixed(2) }} seconds</strong>.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: ['delay', 'score'],
  computed : {

  }
};
</script>

<style>
ul {
  list-style-type: none;
  }
</style>
