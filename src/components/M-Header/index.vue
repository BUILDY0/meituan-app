<template>
  <div class="main-header">
    <top-bar />
    <m-nav />
  </div>
</template>
<script>
import TopBar from "./TopBar.vue";
import MNav from "./MNav.vue";
export default {
  components: {
    TopBar,
    MNav,
  },
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
.main-header {
  margin-bottom: 177px;
}
</style>