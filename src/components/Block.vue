<template>
  <div id="clickBlock" v-if="showBlock" @click="stopTimer">
    Click me as fast as you can!
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log("reaction time: ", this.reactionTime + "ms");
      this.$emit('end', this.reactionTime)
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
      console.log("delay: ", this.delay);
    }, this.delay);
  },
};
</script>

<style>
#clickBlock {
  background: red;
  width: 50%;
  height: 500px;
  border-radius: 20px;
}
</style>
