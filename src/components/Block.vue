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
  /* :white-space: ; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f,
    inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}
.clickText {
  font-family: "Atomic Age", cursive;
  color: white;
}
</style>
