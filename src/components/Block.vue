<template>
  <div id="clickBlock" @click="end">
    I'm the click block
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
    };
  },
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      console.log(this.delay);
    }, this.delay);
  },
  updated() {
    console.log("component updated");
  },
  unmounted() {
    console.log("component unmounted");
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
