<template>
  <div class="clickBlock" v-if="show" @click="stopTimer">
    <h3 class="clickText">Click!</h3>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      show: false,
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
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
      this.startTimer();
      console.log("delay: ", this.delay);
    }, this.delay);
  },
};
</script>

<style>
.clickBlock {
  width: 100%;
  height: 7em;
  background: red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clickText {
  color: white;
}
</style>
