<template>
  <div class="rounded w-96 h-96 bg-green-500 flex items-center justify-center" v-if="show" @click="stopTimer">
    <h3 class="text-white text-4xl font-bold">Click!</h3>
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

<style></style>
